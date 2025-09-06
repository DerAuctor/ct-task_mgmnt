/**
 * OpenRouter Provider for ct-task_mgmnt
 * Based on the Anubis implementation but simplified for this task manager
 */

import { LLMProvider, LLMOptions, LLMResponse } from './types';

// OpenRouter API Configuration
const OPENROUTER_API_BASE = "https://openrouter.ai/api/v1";
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";

// Supported OpenRouter models (dynamic - fetched from API)
let SUPPORTED_MODELS: Array<{id: string, name: string, description: string}> = [];

export class OpenRouterProvider implements LLMProvider {
  name = 'openrouter';
  displayName = 'OpenRouter';
  description = 'OpenRouter provider with dynamic model routing';

  async initialize(): Promise<void> {
    // Check if API key is provided
    if (!OPENROUTER_API_KEY) {
      throw new Error("OpenRouter API key not provided. Please set OPENROUTER_API_KEY environment variable.");
    }
    
    // Fetch supported models
    await this.fetchSupportedModels();
  }

  async fetchSupportedModels(): Promise<void> {
    try {
      const response = await fetch(`${OPENROUTER_API_BASE}/models`, {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.status} - ${await response.text()}`);
      }

      const data = await response.json();
      SUPPORTED_MODELS = data.data.map((model: any) => ({
        id: model.id,
        name: model.id,
        description: model.description || `OpenRouter model: ${model.id}`
      }));
    } catch (error) {
      console.warn("Failed to fetch OpenRouter models:", error);
      // Fallback to some default models
      SUPPORTED_MODELS = [
        { id: 'openai/gpt-4', name: 'GPT-4', description: 'OpenAI GPT-4 via OpenRouter' },
        { id: 'anthropic/claude-3-opus', name: 'Claude 3 Opus', description: 'Anthropic Claude 3 Opus via OpenRouter' },
        { id: 'google/gemini-pro', name: 'Gemini Pro', description: 'Google Gemini Pro via OpenRouter' },
        { id: 'mistralai/mistral-large', name: 'Mistral Large', description: 'Mistral Large via OpenRouter' }
      ];
    }
  }

  async generateCompletion(prompt: string, options?: LLMOptions): Promise<LLMResponse> {
    // Validate API key
    if (!OPENROUTER_API_KEY) {
      throw new Error("OpenRouter API key not provided. Please set OPENROUTER_API_KEY environment variable.");
    }

    // Use the first model as default if no specific model is requested
    const modelId = options?.model || SUPPORTED_MODELS[0]?.id || 'openai/gpt-4';

    // Prepare request data
    const requestData = {
      model: modelId,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: options?.temperature || 0.7,
      max_tokens: options?.maxTokens || 8192,
    };

    try {
      // Make API request
      const response = await fetch(`${OPENROUTER_API_BASE}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://anubis-ai.com',
          'X-Title': 'Anubis AI Assistant',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} - ${await response.text()}`);
      }

      // Process response
      const responseData = await response.json();
      const content = responseData.choices[0]?.message?.content || "";

      return {
        content,
        provider: this.name,
        model: modelId,
      };
    } catch (error) {
      throw new Error(`Failed to generate completion: ${error.message}`);
    }
  }

  getSupportedModels(): Array<{id: string, name: string, description: string}> {
    return SUPPORTED_MODELS;
  }
}

// Factory function for easier integration
export function createOpenRouterProvider(): OpenRouterProvider {
  return new OpenRouterProvider();
}