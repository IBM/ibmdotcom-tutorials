import axios, { AxiosError } from 'axios';

const OLLAMA_BASE_URL = 'http://localhost:11434';

interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

export const ollamaService = {
  async askQuestion(question: string, version: string): Promise<string> {
    try {
      console.log('Sending request to Ollama:', {
        url: `${OLLAMA_BASE_URL}/api/generate`,
        model: 'granite3.2:8b',
        question,
        version
      });

      const response = await axios.post(`${OLLAMA_BASE_URL}/api/generate`, {
        model: 'granite3.2:8b',
        prompt: `You are a D&D ${version} rules assistant. Please provide accurate and concise answers based on the official rulebooks. ${question}`,
        stream: false
      });

      console.log('Received response:', response.data);
      const data = response.data as OllamaResponse;
      return data.response;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Axios Error:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
          config: {
            url: error.config?.url,
            method: error.config?.method,
            data: error.config?.data
          }
        });
      } else {
        console.error('Unknown error:', error);
      }
      throw new Error('Failed to get response from the AI model');
    }
  }
};
