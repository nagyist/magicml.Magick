# Windows Installation Guide

## Project Architecture Overview

Before starting the installation, it's important to understand the project structure:

- The `@magickml/client` is a library of components and utilities used by other parts of the system, not a standalone application
- The portal is the main web interface that uses this client library
- The system requires several services (PostgreSQL, Redis, S3) which are managed through Docker

## Prerequisites

Before installing Magick, ensure you have the following prerequisites installed:

1. **Git**

   - Download and install from [git-scm.com](https://git-scm.com/download/win)
   - During installation:
     - Choose "Use Git from Git Bash only" or "Use Git from the Windows Command Prompt"
     - Choose "Checkout as-is, commit Unix-style line endings"

2. **Node.js 18+**

   - Download and install from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (18.x or later)
   - Ensure "Add to PATH" is selected during installation

3. **Docker Desktop**

   - Enable WSL 2 (Windows Subsystem for Linux):
     ```powershell
     # Run in PowerShell as Administrator
     wsl --install
     ```
   - Download and install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
   - During installation, ensure "Use WSL 2 instead of Hyper-V" is selected
   - Restart your computer after installation

4. **Python Tools**

   - Download and install Python 3.x from [python.org](https://www.python.org/downloads/)
   - During installation:
     - Check "Add Python to PATH"
     - Check "Install pip"

   After Python installation:

   ```cmd
   # Install pipx
   python -m pip install --user pipx
   python -m pipx ensurepath

   # Install Poetry
   pipx install poetry
   ```

## Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Oneirocom/Magick
   cd Magick
   ```

2. Set up environment variables:

   ```bash
   copy .env.example .env.local
   ```

   You'll need to set up authentication with Clerk:

   1. Create a free account at [dashboard.clerk.com](https://dashboard.clerk.com)
   2. Create a new application:
      ![Create Clerk Application](../images/create-application.png)
      - Click "Add Application"
      - Name your application (e.g. "Magick")
      - Under "Sign-in methods", enable Email and Google
      - Click "Create Application"
   3. Get your API keys:
      ![Update Environment Values](../images/update-application-env-values.png)
      - From your Clerk dashboard, find your API keys under the "API Keys" section
      - Copy both the "Publishable Key" and "Secret Key"
   4. Add them to your `.env.local`:
      ```
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key
      CLERK_SECRET_KEY=sk_test_your_secret_key
      ```

3. Install dependencies:

   ```bash
   npm install
   poetry install --no-root
   ```

4. Initialize the database services:

   ```bash
   # Start required containers (PostgreSQL, Redis, S3mock)
   npm run portal:up

   # Wait a few seconds for containers to be ready, then:
   npm run db:init        # Initialize main database
   npm run portal:db:init # Initialize portal database
   npm run bucket:init    # Initialize S3 buckets
   ```

5. Start the development environment:

   ```bash
   # Start the portal in development mode
   npm run dev:portal     # The portal will be available at http://localhost:4000
   ```

## Database Setup

Magick uses PostgreSQL by default. If you're using the default configuration:

1. Make sure Docker Desktop is running
   - Check the Docker Desktop icon in the system tray
   - Or open Docker Desktop from the Start menu
2. The database will be automatically created on first run

To use a custom database:

1. Edit the `.env` file to update database connection settings
2. Run migrations:
   ```cmd
   cd apps/server
   npm run migrate
   ```

## Development Tools

### Chrome Self-Signed Certificates

For local development with self-signed certificates:

1. Open Chrome
2. Navigate to: `chrome://flags/#allow-insecure-localhost`
3. Enable the flag

### Webhooks Setup (Optional)

For features requiring webhooks (e.g., GitHub integration):

1. Create an [ngrok](https://ngrok.com/) account
2. Add your ngrok auth token to the `.env` file

## Troubleshooting

- If you encounter "command not found" errors:
  - Ensure all prerequisites are installed
  - Check that all tools are added to your system's PATH
  - Try closing and reopening your terminal
- For WSL 2 issues:
  - Ensure virtualization is enabled in your BIOS
  - Run `wsl --status` to check WSL installation
  - Try `wsl --update` if you encounter issues
- For database issues:
  - Ensure Docker Desktop is running
  - Check that port 5432 is available
  - Check Docker Desktop logs for errors
- For permission issues:
  - Run terminal as Administrator
  - Check Windows Defender or antivirus settings
- Check the logs in `apps/server/logs` for detailed error messages
