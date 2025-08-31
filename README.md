# CT Task Management System

## Overview
The CT Task Management System is a comprehensive solution for managing tasks and projects. It provides features for creating, organizing, and tracking tasks, as well as collaboration tools for team members.

## Features
- Task creation, editing, and deletion
- Task prioritization and categorization
- Progress tracking and status updates
- User authentication and authorization
- Collaboration features (task assignment, comments, notifications)
- Reporting and analytics
- Responsive web interface
- LLM integration with multiple Gemini models (2.5 Flash, 2.5 Pro, 2.0 Flash, 1.5 Pro, 1.5 Flash)
- OAuth2 authentication for Gemini providers

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up the database
4. Configure environment variables
5. Set up OAuth2 credentials for Gemini provider (see below)
6. Run the application: `npm start`

## LLM Provider Configuration

### Gemini Provider Setup
To use the Gemini provider, you need to set up OAuth2 credentials:

1. Install the Google Cloud CLI: https://cloud.google.com/sdk/docs/install
2. Authenticate with your Google account:
   ```bash
   gcloud auth application-default login
   ```
3. The system will automatically use the default credentials for authentication.

### Environment Variables
You can configure the following environment variables in your `.env` file:

```bash
# LLM Provider Configuration
# Path to OAuth2 credentials file for Gemini provider
# GEMINI_OAUTH_CREDS_PATH=

# Optional: Explicit project ID for Gemini provider
# GEMINI_PROJECT_ID=
```

## Project Structure
- `src/` - Source code for the application
  - `core/` - Core system components
    - `brain/` - LLM and AI components
      - `llm/` - LLM services and providers
        - `services/` - Individual LLM provider implementations
  - `public/` - Static files for the web interface
- `docs/` - Documentation and project plans
- `data/` - Data storage and task files
- `scripts/` - Utility scripts for development and deployment

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.