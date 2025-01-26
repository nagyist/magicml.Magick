# Linux Installation Guide

## Project Architecture Overview

This project consists of multiple services that work together. For a detailed understanding of the service hierarchy and how they interact, please see [Architecture Overview](../architecture.md).

Key services that will be running:

- PostgreSQL databases (Main & Shadow) for data storage
- Redis for caching and real-time updates
- S3Mock for file storage
- IDE/Agent Server (port 3030) for backend operations
- Portal Frontend (port 3000) for user interface

## Prerequisites

1. **Node.js 18+**

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Docker & Docker Compose**

   ```bash
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER

   # Install Docker Compose
   sudo apt-get install docker-compose
   ```

   Note: Log out and back in for the docker group changes to take effect.

3. **Git**

   ```bash
   sudo apt-get install git
   ```

4. **Python Tools**
   ```bash
   sudo apt-get install python3-pip
   python3 -m pip install --user pipx
   python3 -m pipx ensurepath
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

1. Ensure all required services are running (check Docker status with `docker ps`)
2. Verify environment variables in `.env.local`
3. Check service logs for specific errors
4. Refer to [Architecture Overview](../architecture.md) for service dependencies

### Common Linux-Specific Issues

1. **Docker Permission Issues**

   ```bash
   # If you get permission errors with Docker:
   sudo usermod -aG docker $USER
   # Then log out and back in
   ```

2. **Port Conflicts**

   ```bash
   # Check if ports are already in use:
   sudo lsof -i :3000
   sudo lsof -i :3030
   ```

3. **System Dependencies**
   ```bash
   # If you're missing build essentials:
   sudo apt-get install build-essential
   ```
