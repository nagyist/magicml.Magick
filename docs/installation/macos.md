# macOS Installation Guide

## Project Architecture Overview

This project consists of multiple services that work together. For a detailed understanding of the service hierarchy and how they interact, please see [Architecture Overview](../architecture.md).

Key services that will be running:

- PostgreSQL databases (Main & Shadow) for data storage
- Redis for caching and real-time updates
- S3Mock for file storage
- IDE/Agent Server (port 3030) for backend operations
- Portal Frontend (port 3000) for user interface

## Prerequisites

1. **Homebrew** (Package Manager)

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Git**

   ```bash
   brew install git
   ```

3. **Node.js 18+**

   ```bash
   brew install node@18
   ```

4. **Docker Desktop**

   ```bash
   brew install --cask docker
   ```

   Start Docker Desktop from Applications folder

5. **Python Tools**
   ```bash
   brew install pipx
   pipx ensurepath
   ```

## Installation Steps

1. **Clone Repository**

   ```bash
   git clone https://github.com/Oneirocom/Magick
   cd Magick
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   ```bash
   cp .env.example .env.local
   ```

   The default development URLs will be:

   - Portal Frontend: http://localhost:3000
   - IDE/Agent Server: http://localhost:3030

4. **Start Infrastructure Services**

   ```bash
   npm run portal:up
   ```

   This starts PostgreSQL, Redis, and S3Mock containers.

5. **Initialize Databases**

   ```bash
   npm run db:init        # Initialize main database
   npm run portal:db:init # Initialize portal database and seed templates
   ```

6. **Start Backend Server**

   ```bash
   npm run dev:server
   ```

7. **Start Portal Frontend**
   ```bash
   npm run portal:dev
   ```

## Verification

After starting all services, you should be able to access:

- Portal Frontend: http://localhost:3000
- IDE/Agent Server: http://localhost:3030

## Troubleshooting

If you encounter issues:

1. Ensure all required services are running (check Docker Desktop)
2. Verify environment variables in `.env.local`
3. Check service logs for specific errors
4. Refer to [Architecture Overview](../architecture.md) for service dependencies
