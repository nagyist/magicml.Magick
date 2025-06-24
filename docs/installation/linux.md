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

4. **Python 3.11**
   ```bash
   # Add deadsnakes PPA for Python 3.11
   sudo add-apt-repository ppa:deadsnakes/ppa
   sudo apt-get update
   sudo apt-get install python3.11 python3.11-venv python3.11-dev
   sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.11 1
   sudo apt-get install python3-pip
   ```

## Clerk Authentication Setup

Magick uses [Clerk](https://clerk.com/) for authentication. You'll need to set up a Clerk account and application before proceeding:

1. Sign up for a free account at [clerk.com](https://clerk.com)
2. Create a new application
   ![Create Clerk Application](../images/create-application.png)
3. Once created, copy the required environment variables
   ![Update Environment Values](../images/update-application-env-values.png)
4. Add these values to your `.env.local` file in the next section

## Installation Steps

1. **Clone Repository**

   ```bash
   git clone https://github.com/Oneirocom/Magick
   cd Magick
   ```

2. **Install Dependencies**

   ```bash
   npm install --python=python3.11
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

   This starts PostgreSQL, Redis, and S3Mock containers. Wait a few moments for the services to be ready.

5. **Initialize and Seed Databases**

   ```bash
   npm run db:init        # Initialize main database
   npm run portal:db:init # Initialize portal database and seed templates
   ```

6. **Start Services**

   Start the required services in separate terminal windows:

   ```bash
   npm run dev-base      # Start the base services
   npm run dev:connector # Start the connector service
   npm run dev:portal    # Start the portal frontend
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
