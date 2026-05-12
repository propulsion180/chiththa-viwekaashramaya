#!/bin/bash

# Configuration
BINARY="./main"
MAIN_GO="main.go"
SERVER_DIR="./temple-server"
CHECK_INTERVAL=60  # seconds (5 minutes)

# Start the server
start_server() {
    echo "[$(date)] Starting server..."
    $BINARY &
    SERVER_PID=$!
    echo "[$(date)] Server started with PID $SERVER_PID"
}

# Build everything
build() {
    echo "[$(date)] Building..."

    git reset --hard
    git clean -fd

    git pull origin main

    echo "[$(date)] Building frontend..."
    pnpm run dev

    chmod +x deploy.sh

    cd $SERVER_DIR
    echo "[$(date)] Building Go binary..."
    go build -o $BINARY $MAIN_GO

    echo "[$(date)] Setting port permissions..."
    sudo setcap 'cap_net_bind_service=+ep' $BINARY

    echo "[$(date)] Build complete"
}

# Check for remote changes
has_changes() {
    git fetch origin main
    LOCAL=$(git rev-parse HEAD)
    REMOTE=$(git rev-parse origin/main)
    [ "$LOCAL" != "$REMOTE" ]
}

# Initial build and start
build
start_server

# Poll loop
while true; do
    sleep $CHECK_INTERVAL

    if has_changes; then
        echo "[$(date)] Remote changes detected"
        build

        echo "[$(date)] Stopping old server (PID $SERVER_PID)..."
        kill $SERVER_PID
        wait $SERVER_PID 2>/dev/null

        start_server
    else
        echo "[$(date)] No changes detected"
    fi
done
