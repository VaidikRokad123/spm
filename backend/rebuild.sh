#!/bin/bash

# 1. Clean up any existing container with the same name
echo "🧹 Cleaning up old containers..."
docker rm -f fleetflow-backend-container 2>/dev/null || true

# 2. Build the new Docker image
echo "📦 Building Docker image..."
docker build -t fleetflow-backend .

# 3. Run the container with auto-cleanup on exit (--rm)
echo "🚀 Starting Docker container in foreground..."
docker run --rm --name fleetflow-backend-container -p 3000:3000 --env-file .env fleetflow-backend
