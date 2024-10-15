package logger

import (
	"github.com/fatih/color"
	"github.com/sirupsen/logrus"
	"os"
	"time"
)

type CustomLogger struct {
	LocationName string
	Logger       *logrus.Entry
}

func NewLogger(locationName string) *CustomLogger {
	logger := logrus.New()

	logger.Out = os.Stdout
	logger.SetFormatter(&logrus.TextFormatter{
		FullTimestamp:   true,
		TimestampFormat: time.RFC3339,
	})

	return &CustomLogger{
		LocationName: locationName,
		Logger:       logger.WithField("Местоположение :", locationName),
	}
}

func (l *CustomLogger) Info(msg string) {
	l.Logger.Info(color.HiBlueString(msg))
}

func (l *CustomLogger) Warn(msg string) {
	l.Logger.Warn(color.HiYellowString(msg))
}

func (l *CustomLogger) Error(msg string) {
	l.Logger.Error(color.HiRedString(msg))
}

func (l *CustomLogger) Fatal(msg string) {
	l.Logger.Fatal(color.HiMagentaString(msg))
}
