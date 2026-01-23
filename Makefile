# Makefile for Jardineo Web Portal
# Quick commands for common operations

.PHONY: help install dev build start docker-dev docker-prod docker-stop clean lint

# Default target
help:
	@echo "Jardineo Web Portal - Available commands:"
	@echo ""
	@echo "  make install      - Install npm dependencies"
	@echo "  make dev          - Start development server"
	@echo "  make build        - Build production bundle"
	@echo "  make start        - Start production server"
	@echo "  make lint         - Run ESLint"
	@echo ""
	@echo "  make docker-dev   - Start Docker development container"
	@echo "  make docker-prod  - Start Docker production container"
	@echo "  make docker-stop  - Stop all Docker containers"
	@echo ""
	@echo "  make clean        - Clean build artifacts"

# Install dependencies
install:
	npm install

# Development server
dev:
	npm run dev

# Production build
build:
	npm run build

# Start production server
start:
	npm run start

# Lint code
lint:
	npm run lint

# Docker development
docker-dev:
	docker-compose up dev

# Docker production
docker-prod:
	docker-compose up prod --build

# Stop Docker containers
docker-stop:
	docker-compose down

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf node_modules
	rm -rf out

# Quick APK update reminder
apk-update:
	@echo "To update APK version:"
	@echo "1. Copy new APK to public/apk/<version>.apk"
	@echo "2. Update public/apk/latest.json"
	@echo "3. Commit and push changes"
