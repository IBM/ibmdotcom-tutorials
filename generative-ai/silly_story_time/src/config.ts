// Configuration for the application
export const config = {
  // Stability AI API Key
  stabilityApiKey: import.meta.env.VITE_STABILITY_API_KEY || '',
  
  // Check if the API key is available
  hasStabilityApiKey: !!import.meta.env.VITE_STABILITY_API_KEY,
  
  // Log environment variables (without exposing the actual key)
  logEnvironment: () => {
    console.log('Environment variables loaded:', {
      hasStabilityApiKey: !!import.meta.env.VITE_STABILITY_API_KEY,
      nodeEnv: import.meta.env.MODE,
    });
  }
}; 