# Linux Installation Guide

## Project Architecture Overview

Before starting the installation, it's important to understand the project structure:

- The `@magickml/client` is a library of components and utilities used by other parts of the system, not a standalone application
- The portal is the main web interface that uses this client library
- The system requires several services (PostgreSQL, Redis, S3) which are managed through Docker

## Prerequisites

Before installing Magick, ensure you have the following prerequisites installed:

1. **Git**

   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install git

   # Fedora
   sudo dnf install git

   # Arch Linux
   sudo pacman -S git
   ```

2. **Node.js 18+**

   ```bash
   # Using Node Version Manager (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc  # or source ~/.zshrc
   nvm install 18
   nvm use 18

   # Or using package manager
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Fedora
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo dnf install -y nodejs
   ```

3. **Docker**

   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install docker.io docker-compose
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER  # Log out and back in after this

   # Fedora
   sudo dnf install docker docker-compose
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER  # Log out and back in after this

   # Arch Linux
   sudo pacman -S docker docker-compose
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER  # Log out and back in after this
   ```

4. **Python Tools**

   ```bash
   # Install pip and pipx
   sudo apt-get install python3-pip  # Ubuntu/Debian
   sudo dnf install python3-pip      # Fedora
   sudo pacman -S python-pip         # Arch Linux

   python3 -m pip install --user pipx
   python3 -m pipx ensurepath

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
   cp .env.example .env.local
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

1. Make sure Docker is running:
   ```bash
   sudo systemctl status docker
   ```
2. The database will be automatically created on first run

To use a custom database:

1. Edit the `.env` file to update database connection settings
2. Run migrations:
   ```bash
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

- If you encounter permission issues during installation, you may need to use `sudo` for some commands
- For database issues:
  - Ensure Docker is running: `sudo systemctl status docker`
  - Check if port 5432 is available: `sudo lsof -i :5432`
- Check the logs in `apps/server/logs` for detailed error messages
- If you can't connect to Docker without sudo, make sure you've added your user to the docker group and logged out/in
