# Setup

## Prerequisites

-   Docker installed on your system
-   Node.js and npm installed on your system
-   .env file in `server/config` directory

## Environment variables

-   "PORT" - My default is 5000
-   "NODE_ENV"
-   "ADMIN_KEY"
-   "SERVER_URL"
-   "REDIS_IP" - Local default is 127.0.0.1
-   "REDIS_PORT" - Local default is 6379
-   "MONGO_USER"
-   "MONGO_PW"
-   "MONGO_IP"
-   "MONGO_PORT" - Local default is 27017
-   "MONGO_DB" - the database name for the respective project

## Boot-Up Steps

1. **Start MongoDB and Redis Cache:**

    Run `docker-compose up` in the root directory to start MongoDB and Redis Cache.

2. **Start the Server:**

    Navigate to `server/` directory and run `npm run dev`.

3. **Start the Client:**

    Navigate to `client/` directory and run `npm run dev`.

## Accessing the Application

Once server and client are running:

-   Server: http://localhost:5000
-   Client: http://localhost:3000
