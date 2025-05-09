import { config } from '../config';

// This function will generate an image based on the story content
export const generateStoryImage = async (
  story: string, 
  theme: string,
  storyType: string,
  characterType: string,
  mainCharacter: string,
  additionalCharacters: string[]
): Promise<string> => {
  try {
    // Create a prompt based on the story content and all input fields
    const prompt = createImagePrompt(story, theme, storyType, characterType, mainCharacter, additionalCharacters);
    console.log('Generated image prompt:', prompt);
    
    // Call the Stability AI API with the enhanced prompt
    return await callStabilityAPI(prompt, theme);
  } catch (error) {
    console.error('Error in generateStoryImage:', error);
    // Return a fallback image if the API call fails
    return getFallbackImage(theme, storyType, characterType);
  }
};

// Create a prompt for the image generation API based on the story content
const createImagePrompt = (story: string, theme: string, storyType: string, characterType: string, mainCharacter: string, additionalCharacters: string[]): string => {
  // Extract more content from the story
  const paragraphs = story.split('\n').filter(p => p.trim().length > 0);
  
  // Get the first two paragraphs for more context
  const storyContent = paragraphs.slice(0, 2).join(' ');
  
  // Create a list of all characters
  const allCharacters = [mainCharacter, ...additionalCharacters.filter(name => name.trim() !== '')];
  const characterList = allCharacters.length > 1 
    ? `${allCharacters.slice(0, -1).join(', ')} and ${allCharacters[allCharacters.length - 1]}`
    : mainCharacter;
  
  // Create a more detailed, child-friendly prompt
  return `A colorful, child-friendly illustration for a ${storyType.toLowerCase()} story about ${theme}. 
  The scene should be bright, cheerful, and suitable for children under 10. 
  Style: cartoon, vibrant colors, simple shapes, no scary elements. 
  Characters: ${characterList} as ${characterType.toLowerCase()} characters. 
  Scene: ${storyContent.substring(0, 200)}... 
  The illustration should capture the essence of the ${storyType.toLowerCase()} theme while maintaining a playful and imaginative atmosphere.`;
};

// Get a fallback image based on the theme or prompt
const getFallbackImage = (theme: string, storyType: string, characterType: string, prompt?: string): string => {
  // First try to get a theme-specific image
  const themeImages: Record<string, string> = {
    'friendship': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop',
    'adventure': 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
    'magic': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
    'animals': 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600&fit=crop',
    'space': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=600&fit=crop',
    'ocean': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    'forest': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    'school': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
  };

  // If we have a theme-specific image, use it
  if (theme in themeImages) {
    console.log('Using theme-specific fallback image for:', theme);
    return themeImages[theme];
  }

  // If we have a prompt, try to use it for a more relevant fallback
  if (prompt) {
    console.log('Using prompt-based fallback image');
    // Extract keywords from the prompt
    const keywords = prompt
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(' ')
      .filter(word => word.length > 3)
      .slice(0, 5)
      .join(',');
    
    return `https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=800&h=600&fit=crop&q=${encodeURIComponent(keywords)}`;
  }

  // Default fallback if no theme or prompt matches
  console.log('Using default fallback image');
  return 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=800&h=600&fit=crop';
};

// Call the Stability AI API
const callStabilityAPI = async (prompt: string, theme: string): Promise<string> => {
  // Get the API key from the config
  const API_KEY = config.stabilityApiKey;
  
  console.log('Starting Stability AI API call...');
  console.log('API Key available:', config.hasStabilityApiKey);
  console.log('API Key length:', API_KEY?.length || 0);
  
  if (!API_KEY) {
    console.error('Stability API key is missing. Please add it to your environment variables.');
    throw new Error('API key missing');
  }
  
  try {
    console.log('Making API request to Stability AI with prompt:', prompt);
    
    // Create FormData for the request
    const formData = new FormData();
    formData.append('none', '');
    formData.append('prompt', prompt);
    formData.append('output_format', 'webp');
    
    console.log('Request data:', {
      prompt,
      output_format: 'webp'
    });

    const response = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'image/*'
      },
      body: formData
    });

    console.log('API response status:', response.status);
    console.log('API response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error response:', errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    // The API returns the image directly as binary data
    const imageBlob = await response.blob();
    console.log('Image blob received, size:', imageBlob.size);
    
    // Convert the blob to a data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(imageBlob);
    });
  } catch (error) {
    console.error('Error calling Stability API:', error);
    console.log('Using fallback image...');
    return getFallbackImage(theme, prompt);
  }
}; 