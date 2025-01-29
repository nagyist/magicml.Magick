# Windows Installation Guide

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

   - Download and install from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (18.x)
   - During installation, ensure "Add to PATH" is checked

2. **Git**

   - Download and install from [git-scm.com](https://git-scm.com/download/win)
   - Choose 64-bit Git for Windows Setup
   - Use default installation options

3. **Docker Desktop**

   - Download and install from [docker.com](https://www.docker.com/products/docker-desktop)
   - During installation:
     - Enable WSL 2 features if prompted
     - Add shortcut to desktop
   - After installation:
     - Start Docker Desktop
     - Wait for the engine to start (check system tray icon)

4. **Python 3.11**
   - Download and install Python 3.11 from [python.org](https://www.python.org/downloads/release/python-3115/)
   - During installation:
     - Check "Add Python 3.11 to PATH"
     - Choose "Customize installation"
     - Enable "pip" in optional features

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

   ```cmd
   git clone https://github.com/Oneirocom/Magick
   cd Magick
   ```

2. **Install Dependencies**

   ```cmd
   npm install --python=python3.11
   ```

3. **Configure Environment**

   ```cmd
   copy .env.example .env.local
   ```

   The default development URLs will be:

   - Portal Frontend: http://localhost:3000
   - IDE/Agent Server: http://localhost:3030

4. **Start Infrastructure Services**

   ```cmd
   npm run portal:up
   ```

   This starts PostgreSQL, Redis, and S3Mock containers.

5. **Initialize Databases**

   ```cmd
   npm run db:init        # Initialize main database
   npm run portal:db:init # Initialize portal database and seed templates
   ```

6. **Start Backend Server**

   ```cmd
   npm run dev:server
   ```

7. **Start Portal Frontend**
   ```cmd
   npm run portal:dev
   ```

## Verification

After starting all services, you should be able to access:

- Portal Frontend: http://localhost:3000
- IDE/Agent Server: http://localhost:3030

## Troubleshooting

If you encounter issues:

1. Ensure all required services are running (check Docker Desktop dashboard)
2. Verify environment variables in `.env.local`
3. Check service logs for specific errors
4. Refer to [Architecture Overview](../architecture.md) for service dependencies

### Common Windows-Specific Issues

1. **WSL 2 Issues**

   - Open PowerShell as Administrator and run:

   ```powershell
   wsl --update
   ```

   - If WSL is not installed:

   ```powershell
   wsl --install
   ```

2. **Port Conflicts**

   - Open PowerShell as Administrator and run:

   ```powershell
   netstat -ano | findstr :3000
   netstat -ano | findstr :3030
   ```

3. **Docker Issues**

   - Ensure Hyper-V is enabled (Windows Pro/Enterprise)
   - For Windows Home, ensure WSL 2 is properly configured
   - Restart Docker Desktop after installation

4. **Python Path Issues**
   - Verify Python is in PATH:
   ```cmd
   python --version
   pip --version
   ```
   - If not found, add Python and pip to PATH manually through System Properties > Environment Variables
