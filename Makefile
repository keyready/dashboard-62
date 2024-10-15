APP_BINARY_NAME=vkarank

GO_BUILD_FLAGS=-ldflags="-s -w"

.DEFAULT_GOAL := help

test:
	@echo "Run tests:"
	#go test ./... -v

fmt:
	@echo "Formatted:"
	#go fmt ./...

lint:
	@echo "Run linter:"

help:
	@echo "Makefile instruction:"

#.PHONY: build run test clean fmt lint docker-build docker-run help