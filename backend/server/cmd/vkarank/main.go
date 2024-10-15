package main

import (
	"fmt"
	"net/http"
	"os"
	"server/pkg/logger"
)

var StartAppLogger = logger.NewLogger("StartAppLogger")

func main() {
	//mongoConfig := database.Config{
	//	MongoURI:     os.Getenv("MONGO_URI"),
	//	DatabaseName: os.Getenv("MONGO_DATABASE"),
	//	Timeout:      10 * time.Second,
	//}

	//mongodb := database.MongoDatabaseConnect(mongoConfig)

	server := &http.Server{
		Addr:    os.Getenv("SERVER_ADDR"),
		Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {}),
	}

	if startAppErr := server.ListenAndServe(); startAppErr != nil {
		StartAppLogger.Fatal(fmt.Sprintf("Ошибка запуска приложения: %s", startAppErr.Error()))
	}

}
