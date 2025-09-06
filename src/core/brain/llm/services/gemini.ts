/**
 * Gemini Provider for ct-task_mgmnt
 * Based on the Anubis implementation but simplified for this task manager
 */

import { LLMProvider, LLMOptions, LLMResponse } from './types';

// OAuth2 Configuration (from Anubis implementation)
const OAUTH_CLIENT_ID = "681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com";
const OAUTH_CLIENT_SECRET = "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";
const OAUTH_REFRESH_URL = "https://oauth2.googleapis.com/token";
const CODE_ASSIST_ENDPOINT = "https://cloudcode-pa.googleapis.com";
const CODE_ASSIST_API_VERSION = "v1internal";

// OAuth2 credentials file path
const OAUTH_CREDS_PATH = `${process.env.HOME}/.gemini/oauth_creds.json`;

// Supported Gemini models
const SUPPORTED_MODELS = [
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', description: 'Fast and efficient model' },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', description: 'More capable model for complex tasks' },
  { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', description: 'Previous generation fast model' },
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', description: 'Capable model for advanced reasoning' },
  { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', description: 'Efficient model for quick responses' }
];

export class GeminiProvider implements LLMProvider {
  name: string;
  displayName: string;
  description: string;

  constructor(modelId: string = 'gemini-2.5-flash') {
    const model = SUPPORTED_MODELS.find(m => m.id === modelId);
    if (!model) {
      throw new Error(`Unsupported Gemini model: ${modelId}`);
    }
    
    this.name = model.id;
    this.displayName = model.name;
    this.description = `Google ${model.name} model using OAuth2 authentication - ${model.description}`;
  }

  async initialize(): Promise<void> {
    // Check if OAuth credentials exist
    try {
      const fs = await import('fs');
      if (!fs.existsSync(OAUTH_CREDS_PATH)) {
        throw new Error(`OAuth credentials file not found: ${OAUTH_CREDS_PATH}`);
      }
    } catch (error) {
      throw new Error(`Failed to initialize Gemini provider: ${error.message}`);
    }
  }

  async generateCompletion(prompt: string, options?: LLMOptions): Promise<LLMResponse> {
    // Load OAuth credentials
    const fs = await import('fs');
    const credentials = JSON.parse(fs.readFileSync(OAUTH_CREDS_PATH, 'utf-8'));
    
    // Check if token is expired and refresh if necessary
    const token = await this.getValidToken(credentials);
    
    // Prepare request data
    const requestData = {
      model: this.name,
      project: await this.discoverProjectId(),
      request: {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: options?.temperature || 0.7,
          maxOutputTokens: options?.maxTokens || 8192,
        },
      },
    };

    try {
      // Make API request
      const response = await fetch(
        `${CODE_ASSIST_ENDPOINT}/${CODE_ASSIST_API_VERSION}:streamGenerateContent`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} - ${await response.text()}`);
      }

      // Process response
      const responseData = await response.json();
      const content = this.extractContentFromJson(responseData);
      
      return {
        content,
        provider: this.name,
        model: this.name,
      };
    } catch (error) {
      throw new Error(`Failed to generate completion: ${error.message}`);
    }
  }

  private async getValidToken(credentials: any): Promise<string> {
    // For simplicity, we're assuming the token is valid
    // In a real implementation, you would check expiration and refresh if needed
    return credentials.access_token;
  }

  private async discoverProjectId(): Promise<string> {
    // Try environment variable first
    if (process.env.GEMINI_PROJECT_ID) {
      return process.env.GEMINI_PROJECT_ID;
    }
    
    // Use default project
    return "default-project";
  }

  private extractContentFromJson(data: any): string {
    try {
      // Handle different response structures
      if (Array.isArray(data)) {
        // Handle list response (multiple chunks)
        let content = "";
        for (const chunk of data) {
          const chunkContent = this.extractContentFromJson(chunk);
          if (chunkContent) {
            content += chunkContent;
          }
        }
        return content;
      } else if (typeof data === 'object' && data !== null) {
        // Handle various JSON structures
        if (data.response && data.response.candidates) {
          // Standard structure
          const candidates = data.response.candidates;
          if (candidates.length > 0 && candidates[0].content && candidates[0].content.parts) {
            return candidates[0].content.parts[0].text || "";
          }
        } else if (data.candidates) {
          // Direct candidates structure
          const candidates = data.candidates;
          if (candidates.length > 0 && candidates[0].content && candidates[0].content.parts) {
            return candidates[0].content.parts[0].text || "";
          }
        } else if (data.content && data.content.parts) {
          // Direct content structure
          return data.content.parts[0].text || "";
        } else if (data.text) {
          // Direct text
          return data.text;
        }
      }
      
      return "";
    } catch (error) {
      return "";
    }
  }
}

// Factory functions for easier integration
export function createGeminiFlashProvider(): GeminiProvider {
  return new GeminiProvider('gemini-2.5-flash');
}

export function createGeminiProProvider(): GeminiProvider {
  return new GeminiProvider('gemini-2.5-pro');
}

export function createGemini20FlashProvider(): GeminiProvider {
  return new GeminiProvider('gemini-2.0-flash');
}

export function createGemini15ProProvider(): GeminiProvider {
  return new GeminiProvider('gemini-1.5-pro');
}

export function createGemini15FlashProvider(): GeminiProvider {
  return new GeminiProvider('gemini-1.5-flash');
}

// Legacy factory function for backward compatibility
export function createGeminiProvider(): GeminiProvider {
  return new GeminiProvider();
}