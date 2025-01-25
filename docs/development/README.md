# Development Guide

## Project Structure

```
magick/
├── apps/                    # Application packages
│   ├── client/             # Frontend client application
│   ├── docs/               # Documentation site
│   └── server/             # Backend server application
├── packages/               # Shared packages and libraries
├── plugins/                # Plugin system
└── portal/                # Portal submodule (managed separately)
```

## Development Workflow

1. **Setup Your Environment**
   - Follow the installation guide for your operating system in `docs/installation/`
   - Make sure all prerequisites are installed and working
   - Verify you can run the development server with `npm run dev`

2. **Understanding the Codebase**
   - The project uses a monorepo structure managed with npm workspaces
   - Frontend is built with React and uses a node-based visual programming interface
   - Backend uses Feathers.js with PostgreSQL database
   - Plugin system allows for extensible functionality

3. **Making Changes**
   - Create a new branch for your changes
   - Follow the coding style of the existing codebase
   - Add tests for new functionality
   - Update documentation as needed

4. **Testing**
   - Run unit tests: `npm test`
   - Run integration tests: `npm run test:integration`
   - Test your changes across supported platforms

5. **Submitting Changes**
   - Create a pull request with a clear description
   - Ensure all tests pass
   - Follow the pull request template
   - Request review from maintainers

## Development Commands

```bash
# Start development server
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Environment Variables

The project uses environment variables for configuration. Copy `.env.example` to `.env` and configure:

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/magick

# API Keys (if needed)
OPENAI_API_KEY=your_api_key
GITHUB_TOKEN=your_github_token

# Development
NODE_ENV=development
DEBUG=true
```

## Plugin Development

Plugins extend Magick's functionality. To create a new plugin:

1. Use the plugin template in `plugins/template`
2. Implement the required interfaces
3. Add your plugin to `plugins/index.ts`
4. Test thoroughly
5. Document usage and configuration

## Common Issues

- **Port Conflicts**: Check if ports 4200 (client) or 3030 (server) are in use
- **Database Connection**: Verify PostgreSQL is running and credentials are correct
- **Build Errors**: Make sure all dependencies are installed and Node.js version is correct
- **Plugin Loading**: Check plugin registration and dependencies

## Getting Help

- Check the [troubleshooting guides](../installation/) for your platform
- Search existing GitHub issues
- Join our Discord community for support
- Contact the maintainers for serious issues

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- Pull request guidelines
- Coding standards
- Testing requirements 