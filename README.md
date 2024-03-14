# Project Repository Summary

This ReadMe provides detailed information about the project repository, including its summary, requirements, installation steps and launch instructions.

## Repository Structure

The project repository includes the following directories and files:

- `cypress`:
  - `downloads`: Cypress downloaded files.
  - `e2e`: End-to-end test scripts.
  - `fixtures`: Static data.
  - `page-objects`: Cypress test page objects.
  - `support`: Custom Cypress commands and utilities.
- `.env.example`: Environment variables configuration.
- `.gitignore`: List of files and directories to be ignored by Git.
- `package.json`: Project-specific Node.js package configuration.
- `cypress.config.js`: Configuration file for Cypress.
- `tsconfig.json`: Configuration file for typescript.

## Requirements

To work with this project, ensure that you meet the following system requirements:

- Operating System: Windows 10 and above (64-bit only).
- Node.js: Version 18.x and Node.js 20.x and above.
- For running Cypress locally, any modern web development-capable machine is suitable.

## Steps to Install

Follow these steps to install the project from this GitHub repository and connect all necessary dependencies using `npm install`:

1. Clone the project repository from GitHub:
   ```bash
   git clone https://github.com/magidevv/cypress_ts_test_task
   ```

2. Change your working directory to the project folder:
   ```bash
   cd your-repo
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

4. Set Environment Variables:
   - Create a copy of .env.example as .env.
   - Fill in the necessary environment variables required for the project.

## Launch

- **test**: Run Cypress test in headless mode.
   ```bash
   npm run test
   ```

- **test:headed**: Run Cypress test in headed (GUI) mode.
   ```bash
   npm run test:headed
   ```

- **cypress:open**: Open Cypress CLI.
   ```bash
   npm run cypress:open
   ```