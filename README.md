# tests-untp

The UNTP Test Suite is a comprehensive set of tools designed to ensure conformance to the UN Transparency Protocol (UNTP). This repository contains the following key components:

1. Mock Apps: Demonstrating how decentralized applications work within the UNTP ecosystem.
2. Test Suites: Covering three tiers of testing - technical interoperability, semantic interoperability, and graph validation.
3. Documentation Site: Providing detailed information on setup, configuration, and usage.

The Mock Apps are structured into three main packages:
- Components: Contains the UI components.
- Core: Handles rendering and interaction between components and services.
- Services: Contains the business logic.

These tools allow implementers to model value chains, test UNTP functionality in real-world scenarios, and ensure their implementations align with the UNTP specification across various aspects of interoperability and validation.

## Prerequisites

- [Node.js](https://nodejs.org/en/) version 20.12.2
- [yarn](https://yarnpkg.com/) version 1.22.22
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) (for running services)

## Setup

To set up and run the mock app:

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Build the package:
   ```bash
   yarn build
   ```

3. Start the project:
   ```bash
   yarn start
   ```

## Docker Compose Configuration

We provide a Docker Compose configuration to easily set up the required services (Verifiable Credential Service, Storage Service, a database for the VC service) and the documentation site. To start these services:

```bash
docker-compose up -d
```

This will start pre-configured instances of the necessary services and the documentation site. The `app-config.json` mock app config file is pre-configured to work with these Docker services.

## Documentation

For detailed information about the configuration, services, and how to use the mock app, please refer to the documentation site. 

The documentation site is available at [`http://localhost:3002`](http://localhost:3002) after starting the services with Docker Compose.

If you need to run the documentation site manually:

```bash
cd documentation
yarn install
yarn start
```

Please consult the documentation for comprehensive instructions on setting up and using the mock app, regardless of whether you're using Docker Compose or setting up services manually.