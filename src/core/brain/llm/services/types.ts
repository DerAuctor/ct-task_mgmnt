/**
 * LLM Provider Types
 */

export interface LLMOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  model?: string;
}

export interface LLMResponse {
  content: string;
  provider: string;
  model: string;
  usage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
}

export interface LLMProvider {
  name: string;
  displayName: string;
  description: string;
  initialize(): Promise<void>;
  generateCompletion(prompt: string, options?: LLMOptions): Promise<LLMResponse>;
}