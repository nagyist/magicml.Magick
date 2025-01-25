# macOS Installation Guide

## Project Architecture Overview

Before starting the installation, it's important to understand the project structure:

- The `@magickml/client` is a library of components and utilities used by other parts of the system, not a standalone application
- The portal is the main web interface that uses this client library
- The system requires several services (PostgreSQL, Redis, S3) which are managed through Docker

## Prerequisites

Before installing Magick, ensure you have the following prerequisites installed:

1. **Homebrew**

   ```bash
   # Install Homebrew
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # After installation, make sure Homebrew is in your PATH:
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```

2. **Git**

   ```bash
   brew install git
   ```

3. **Node.js 18**

   ```bash
   # Install nvm
   brew install nvm

   # Add nvm to your shell
   echo 'source ~/.nvm/nvm.sh' >> ~/.zshrc
   source ~/.nvm/nvm.sh

   # Install and use Node.js 18.18.2 specifically
   nvm install 18.18.2
   nvm use 18.18.2
   ```

4. **Docker Desktop**

   - Download from [docker.com](https://www.docker.com/products/docker-desktop)
   - Install and start Docker Desktop

5. **Python Tools**

   ```bash
   # Install pipx using Homebrew
   brew install pipx
   pipx ensurepath

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

1. Make sure Docker Desktop is running
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

Common issues and solutions:

- If you see "Unsupported engine" warnings, verify you're using Node.js 18.18.2:

  ```bash
  node --version
  # If needed:
  nvm use 18.18.2
  ```

- For database issues:

  - Ensure Docker Desktop is running
  - Check that port 5432 is available
  - Review logs in `apps/server/logs`

- For permission issues:
  Some commands may require `sudo` access
