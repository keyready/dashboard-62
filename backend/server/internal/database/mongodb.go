package database

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"server/pkg/logger"
	"time"
)

var MongoConnectLogger = logger.NewLogger("MongoConnectLogger")

type Config struct {
	MongoURI     string
	DatabaseName string
	Timeout      time.Duration
}

type MongoDB struct {
	Client   *mongo.Client
	Database *mongo.Database
}

func MongoDatabaseConnect(cfg Config) *MongoDB {
	ctx, cancel := context.WithTimeout(context.Background(), cfg.Timeout)
	defer cancel()

	clientOptions := options.Client().ApplyURI(cfg.MongoURI)
	mongoClient, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		MongoConnectLogger.Fatal(fmt.Sprintf("Ошибка подключения к MongoDB: %s", err))
	}

	if err = mongoClient.Ping(ctx, readpref.Primary()); err != nil {
		MongoConnectLogger.Fatal(fmt.Sprintf("Ошибка подключения к MongoDB: %s", err))
	}

	MongoConnectLogger.Info(fmt.Sprintf("Подключение к MongoDB %s - успешно", cfg.DatabaseName))

	return &MongoDB{
		Client:   mongoClient,
		Database: mongoClient.Database(cfg.DatabaseName),
	}
}

func (mongodb *MongoDB) MongoDatabaseDisconnect() {
	if err := mongodb.Client.Disconnect(context.Background()); err != nil {
		MongoConnectLogger.Fatal(fmt.Sprintf("Ошибка при закрытии соеднинени MongoDB: %s", err))
	}

	return
}
