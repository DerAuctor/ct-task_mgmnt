# LLM Providers

The CT Task Management System supports multiple LLM providers, with a focus on Google's Gemini models.

## Supported Providers

### Gemini Models
- **gemini-2.5-flash** (Default) - Fast and efficient model
- **gemini-2.5-pro** - More capable model for complex tasks
- **gemini-2.0-flash** - Previous generation fast model
- **gemini-1.5-pro** - Capable model for advanced reasoning
- **gemini-1.5-flash** - Efficient model for quick responses

## Provider Configuration

### OAuth2 Authentication
The Gemini provider uses OAuth2 authentication, which is handled automatically by the system. The system will look for credentials in the following locations:

1. `~/.gemini/oauth_creds.json` (default location)
2. Path specified in the `GEMINI_OAUTH_CREDS_PATH` environment variable

### Project ID
The system will automatically discover the Google Cloud project ID, but you can also specify it explicitly using the `GEMINI_PROJECT_ID` environment variable.

## Provider Implementation

The provider implementation is located in `src/core/brain/llm/services/gemini.ts` and follows the patterns established in the Anubis project.

### Factory Functions

The system provides factory functions for creating instances of each supported provider:

- `createGeminiFlashProvider()` - Creates a Gemini 2.5 Flash provider
- `createGeminiProProvider()` - Creates a Gemini 2.5 Pro provider
- `createGemini20FlashProvider()` - Creates a Gemini 2.0 Flash provider
- `createGemini15ProProvider()` - Creates a Gemini 1.5 Pro provider
- `createGemini15FlashProvider()` - Creates a Gemini 1.5 Flash provider

## Usage

To use a specific provider, select it from the provider dropdown in the web interface. The system will automatically use the selected provider for all LLM operations.