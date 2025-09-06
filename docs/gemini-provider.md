# Gemini Provider Implementation

This document describes the implementation of the Gemini provider for the CT Task Management System.

## Overview

The Gemini provider is implemented in `src/core/brain/llm/services/gemini.ts` and provides access to various Gemini models through Google's Code Assist API.

## Implementation Details

### Authentication

The provider uses OAuth2 authentication with the following configuration:

- **Client ID**: `681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com`
- **Client Secret**: `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`
- **Token Refresh URL**: `https://oauth2.googleapis.com/token`

### API Endpoints

The provider uses the Google Code Assist API endpoints:

- **Base URL**: `https://cloudcode-pa.googleapis.com/v1internal`
- **Content Generation**: `:streamGenerateContent`
- **Project Discovery**: `:loadCodeAssist`

### Supported Models

The provider supports the following models:

1. `gemini-2.5-flash` (default)
2. `gemini-2.5-pro`
3. `gemini-2.0-flash`
4. `gemini-1.5-pro`
5. `gemini-1.5-flash`

## Usage

To use the provider, simply select it from the provider dropdown in the web interface. The system will automatically handle authentication and API calls.

## Configuration

The provider can be configured using the following environment variables:

- `GEMINI_OAUTH_CREDS_PATH` - Path to the OAuth2 credentials file
- `GEMINI_PROJECT_ID` - Explicit project ID to use

## Dependencies

The provider implementation depends on the following packages:

- `@modelcontextprotocol/sdk` - For MCP integration
- Standard Node.js modules (`fs`, `path`, etc.)

## Error Handling

The provider includes error handling for common issues such as:

- Expired OAuth2 tokens (automatic refresh)
- Rate limiting (429 errors)
- Network errors
- Invalid responses

## Future Improvements

Potential future improvements for the provider include:

- Caching of API responses
- More sophisticated error recovery
- Support for additional Gemini features
- Better integration with the task management system