import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { generateStoryWithOllama } from './services/ollamaService'
import { generateStoryImage } from './services/imageService'
import { StoryInputs } from './types'
import { config } from './config'
import { exportAsImage } from './services/directImageExport'
import { audioService } from './services/audioService'

// Helper function to get fallback images
const getFallbackImage = (theme: string): string => {
  // Use static fallback images instead of random Unsplash URLs
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
  
  return themeImages[theme] || 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=800&h=600&fit=crop';
};

// Story type options
const storyTypes = [
  { id: 'Adventure', emoji: '🗺️', label: 'Adventure' },
  { id: 'Fantasy', emoji: '✨', label: 'Fantasy' },
  { id: 'Educational', emoji: '📚', label: 'Educational' },
  { id: 'Bedtime', emoji: '🌙', label: 'Bedtime' },
  { id: 'Animal', emoji: '🐾', label: 'Animal' },
  { id: 'Space', emoji: '🚀', label: 'Space' },
  { id: 'Underwater', emoji: '🐠', label: 'Underwater' },
  { id: 'Fairy Tale', emoji: '👑', label: 'Fairy Tale' }
];

// Character type options
const characterTypes = [
  { id: 'Human Child', emoji: '👧', label: 'Human Child' },
  { id: 'Animal', emoji: '🦁', label: 'Animal' },
  { id: 'Robot', emoji: '🤖', label: 'Robot' },
  { id: 'Superhero', emoji: '🦸', label: 'Superhero' },
  { id: 'Magical Creature', emoji: '🦄', label: 'Magical Creature' },
  { id: 'Alien', emoji: '👽', label: 'Alien' },
  { id: 'Dinosaur', emoji: '🦕', label: 'Dinosaur' },
  { id: 'Fairy', emoji: '🧚', label: 'Fairy' }
];

interface StoryRequest {
  childName: string;
  additionalChildren: string[];  // New field for additional children
  age: number;
  theme: string;
  moral: string;
  length: 'short' | 'medium' | 'long';
}

function App() {
  const [story, setStory] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [childName, setChildName] = useState('');
  const [additionalChildren, setAdditionalChildren] = useState<string[]>(['']); // New state for additional children
  const [age, setAge] = useState<number>(5);
  const [selectedTheme, setSelectedTheme] = useState(''); // Renamed from theme to selectedTheme
  const [selectedStoryType, setSelectedStoryType] = useState(''); // New state for story type
  const [selectedCharacterType, setSelectedCharacterType] = useState(''); // New state for character type
  const [moral, setMoral] = useState('');
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');
  const storyRef = useRef<HTMLDivElement>(null);
  const [ollamaAvailable, setOllamaAvailable] = useState<boolean>(false);

  // Load html2pdf.js from CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.async = true;
    script.onload = () => {
      console.log('html2pdf.js loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load html2pdf.js');
      setError('Failed to load PDF generation library. Please try again later.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Load html2canvas from CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    script.async = true;
    script.onload = () => {
      console.log('html2canvas loaded successfully');
    };
    script.onerror = (error) => {
      console.error('Failed to load html2canvas:', error);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Log environment variables on startup
  useEffect(() => {
    console.log('App started, checking environment variables...');
    config.logEnvironment();
    
    // Test image generation if API key is available
    if (config.hasStabilityApiKey) {
      console.log('API key available, testing image generation...');
      testImageGeneration();
    } else {
      console.warn('No API key available, image generation will not work');
    }
  }, []);

  // Test function to directly test image generation
  const testImageGeneration = async () => {
    try {
      console.log('Testing image generation...');
      const testStory = 'Once upon a time, there was a magical unicorn who loved to paint rainbows in the sky. The unicorn made friends with a friendly dragon who could breathe colorful fire. Together, they created the most beautiful art in the whole kingdom.';
      const testTheme = 'magic';
      
      const imageUrl = await generateStoryImage(testStory, testTheme);
      console.log('Test image generated successfully:', imageUrl);
      
      // Also test the StoryInputs interface
      const testInputs: StoryInputs = {
        mainCharacter: 'Unicorn',
        setting: 'in a magical forest',
        theme: 'magic',
        storyType: 'Fantasy',
        characterType: 'Magical Creature',
        additionalCharacters: ['Dragon']
      };
      
      console.log('StoryInputs interface test:', testInputs);
    } catch (error) {
      console.error('Error testing image generation:', error);
    }
  };

  // Check if Ollama is available
  useEffect(() => {
    const checkOllamaAvailability = async () => {
      try {
        console.log('Checking if Ollama is available...');
        const response = await fetch('http://localhost:11434/api/tags', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log('Ollama is available!');
          setOllamaAvailable(true);
        } else {
          console.warn('Ollama is not available. Status:', response.status);
          setOllamaAvailable(false);
        }
      } catch (error) {
        console.warn('Ollama is not available. Error:', error);
        setOllamaAvailable(false);
      }
    };
    
    checkOllamaAvailability();
  }, []);

  const themes = [
    { id: 'friendship', emoji: '🤝', label: 'Best Buddies Forever!' },
    { id: 'adventure', emoji: '🗺️', label: 'Let\'s Go Exploring!' },
    { id: 'magic', emoji: '✨', label: 'Magical Surprises!' },
    { id: 'animals', emoji: '🐾', label: 'Furry Friends Fun!' },
    { id: 'space', emoji: '🚀', label: 'Zoom to the Stars!' },
    { id: 'ocean', emoji: '🌊', label: 'Splashy Sea Fun!' },
    { id: 'forest', emoji: '🌳', label: 'Woodland Wonders!' },
    { id: 'school', emoji: '🏫', label: 'Learning is Fun!' }
  ];

  // Function to handle theme hover
  const handleThemeHover = () => {
    audioService.playThemeHoverSound();
  };

  // Function to handle story type hover
  const handleStoryTypeHover = () => {
    audioService.playThemeHoverSound();
  };

  // Function to handle character type hover
  const handleCharacterTypeHover = () => {
    audioService.playThemeHoverSound();
  };

  const handleAddChild = () => {
    setAdditionalChildren([...additionalChildren, '']);
  };

  const handleRemoveChild = (index: number) => {
    setAdditionalChildren(additionalChildren.filter((_, i) => i !== index));
  };

  const handleAdditionalChildChange = (index: number, value: string) => {
    const newChildren = [...additionalChildren];
    newChildren[index] = value;
    setAdditionalChildren(newChildren);
  };

  const handleGenerateStory = async () => {
    if (!childName.trim()) {
      setError('Please enter the main child\'s name');
      return;
    }

    // Filter out empty names from additional children
    const validAdditionalChildren = additionalChildren.filter(name => name.trim());

    setIsLoading(true);
    setError(null);
    setStory('');
    setImageUrl('');

    // Start playing background music
    await audioService.playBackgroundMusic();

    try {
      if (ollamaAvailable) {
        // Create inputs for Ollama service
        const inputs: StoryInputs = {
          mainCharacter: childName,
          setting: validAdditionalChildren.length > 0 
            ? `with ${validAdditionalChildren.join(', ')}` 
            : 'in a magical place',
          theme: selectedTheme,
          storyType: selectedStoryType || 'Adventure',
          characterType: selectedCharacterType || 'Human Child',
          additionalCharacters: validAdditionalChildren
        };

        // Generate story using Ollama
        const generatedStory = await generateStoryWithOllama(inputs);
        
        // Generate image based on the story content and all input fields
        const imageUrl = await generateStoryImage(
          generatedStory, 
          selectedTheme,
          selectedStoryType || 'Adventure',
          selectedCharacterType || 'Human Child',
          childName,
          validAdditionalChildren
        );
        
        setStory(generatedStory);
        setImageUrl(imageUrl);
      } else {
        // Use mock story if Ollama is not available
        console.log('Ollama is not available, using mock story');
        const mockStory = generateMockStory(
          childName, 
          validAdditionalChildren, 
          selectedTheme, 
          age, 
          moral, 
          length,
          selectedStoryType,
          selectedCharacterType
        );
        const mockImageUrl = getFallbackImage(selectedTheme);
        
        setStory(mockStory);
        setImageUrl(mockImageUrl);
      }
    } catch (error) {
      console.error('Error generating story:', error);
      setError('Failed to generate story. Please try again.');
      
      // Fallback to mock story if Ollama fails
      const mockStory = generateMockStory(
        childName, 
        validAdditionalChildren, 
        selectedTheme, 
        age, 
        moral, 
        length,
        selectedStoryType,
        selectedCharacterType
      );
      const mockImageUrl = getFallbackImage(selectedTheme);
      
      setStory(mockStory);
      setImageUrl(mockImageUrl);
    } finally {
      // Stop the background music when story generation is complete
      audioService.stopBackgroundMusic();
      // Play the rimshot sound when the story has finished generating
      audioService.playRimshotSound();
      
      // Add a small delay before hiding the loading animation to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Mock story generation function
  const generateMockStory = (
    childName: string, 
    additionalChildren: string[], 
    theme: string, 
    age: number, 
    moral: string, 
    length: 'short' | 'medium' | 'long',
    storyType: string,
    characterType: string
  ): string => {
    // Create a list of all children
    const allChildren = [childName, ...additionalChildren];
    
    // Create a character description based on the character type
    let characterDescription = '';
    if (characterType === 'Animal') {
      characterDescription = `${childName} was a friendly animal`;
    } else if (characterType === 'Robot') {
      characterDescription = `${childName} was a clever robot`;
    } else if (characterType === 'Superhero') {
      characterDescription = `${childName} was a brave superhero`;
    } else if (characterType === 'Magical Creature') {
      characterDescription = `${childName} was a magical creature`;
    } else if (characterType === 'Alien') {
      characterDescription = `${childName} was a curious alien`;
    } else if (characterType === 'Dinosaur') {
      characterDescription = `${childName} was a friendly dinosaur`;
    } else if (characterType === 'Fairy') {
      characterDescription = `${childName} was a tiny fairy`;
    } else {
      characterDescription = `${childName} was a ${age}-year-old child`;
    }
    
    // Create a story based on the story type
    let storyContent = '';
    if (storyType === 'Adventure') {
      storyContent = `${characterDescription} who loved going on adventures. One day, ${childName} decided to explore a mysterious ${theme} place.`;
    } else if (storyType === 'Fantasy') {
      storyContent = `${characterDescription} who lived in a magical world. One day, ${childName} discovered a special ${theme} power.`;
    } else if (storyType === 'Educational') {
      storyContent = `${characterDescription} who was very curious about ${theme}. One day, ${childName} learned something amazing about it.`;
    } else if (storyType === 'Bedtime') {
      storyContent = `${characterDescription} who was getting ready for bed. As ${childName} drifted off to sleep, they dreamed about ${theme}.`;
    } else if (storyType === 'Animal') {
      storyContent = `${characterDescription} who lived in the forest. One day, ${childName} met some other animals who were interested in ${theme}.`;
    } else if (storyType === 'Space') {
      storyContent = `${characterDescription} who loved looking at the stars. One night, ${childName} saw something amazing in the sky related to ${theme}.`;
    } else if (storyType === 'Underwater') {
      storyContent = `${characterDescription} who lived in the ocean. One day, ${childName} discovered a special ${theme} underwater.`;
    } else if (storyType === 'Fairy Tale') {
      storyContent = `Once upon a time, ${characterDescription} who lived in a kingdom. One day, ${childName} encountered a magical ${theme}.`;
    } else {
      storyContent = `${characterDescription} who loved ${theme}. One day, ${childName} had an amazing adventure.`;
    }
    
    // Add additional children to the story if there are any
    if (additionalChildren.length > 0) {
      storyContent += ` ${childName} invited ${additionalChildren.join(', ')} to join in the fun.`;
    }
    
    // Add a moral to the story if provided
    if (moral) {
      storyContent += ` Through this adventure, ${childName} learned that ${moral}.`;
    }
    
    // End the story
    storyContent += ` Everyone worked together and had the most amazing time! The end.`;
    
    return storyContent;
  };

  const handleExportImage = async () => {
    const storyContent = document.getElementById('story-content');
    if (!storyContent) {
      console.error('Story content element not found');
      return;
    }
    
    try {
      await exportAsImage(storyContent);
    } catch (error) {
      console.error('Failed to export image:', error);
      alert('Failed to export image. Please try again.');
    }
  };

  const LoadingAnimation = () => {
    const loadingMessages = [
      "Gathering silly ideas...",
      "Making the story extra funny...",
      "Adding some wacky characters...",
      "Sprinkling in some giggles...",
      "Almost ready to make you laugh..."
    ];
    
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    
    return (
      <div className="loading-container">
        <p className="loading-message">{randomMessage}</p>
        <div className="loading-spinner">
          <span className="loading-emoji">🦄</span>
          <span className="loading-emoji">🌈</span>
          <span className="loading-emoji">🎈</span>
          <span className="loading-emoji">🎪</span>
          <span className="loading-emoji">🎨</span>
        </div>
        <p className="loading-tip">Fun fact: The average child laughs 300 times a day!</p>
      </div>
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          {Array.from("Silly Story Time").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
        <p>Create magical stories with AI! ✨</p>
      </header>
      <p className="subtitle">Create your own funny adventure!</p>
      
      <div className="form-container">
        <div className="input-group">
          <label>Characters</label>
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Main Person"
          />
          {additionalChildren.map((name, index) => (
            <div key={index} className="additional-child-input">
              <input
                type="text"
                value={name}
                onChange={(e) => handleAdditionalChildChange(index, e.target.value)}
                placeholder={`Person ${index + 2}`}
              />
              {index > 0 && (
                <button 
                  className="remove-child-btn"
                  onClick={() => handleRemoveChild(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button 
            className="add-child-btn"
            onClick={handleAddChild}
          >
            + Add Another Person
          </button>
        </div>

        <div className="input-group">
          <label>Choose a theme for your story:</label>
          <div className="theme-grid">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                className={`theme-button ${selectedTheme === themeOption.id ? 'selected' : ''}`}
                onClick={() => setSelectedTheme(themeOption.id)}
                onMouseEnter={handleThemeHover}
              >
                <span className="theme-emoji">{themeOption.emoji}</span>
                <span className="theme-label">{themeOption.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Choose a story type:</label>
          <div className="story-type-grid">
            {storyTypes.map((type) => (
              <button
                key={type.id}
                className={`story-type-button ${selectedStoryType === type.id ? 'selected' : ''}`}
                onClick={() => setSelectedStoryType(type.id)}
                onMouseEnter={handleStoryTypeHover}
              >
                <span className="story-type-emoji">{type.emoji}</span>
                <span className="story-type-label">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Choose a character type:</label>
          <div className="character-type-grid">
            {characterTypes.map((type) => (
              <button
                key={type.id}
                className={`character-type-button ${selectedCharacterType === type.id ? 'selected' : ''}`}
                onClick={() => setSelectedCharacterType(type.id)}
                onMouseEnter={handleCharacterTypeHover}
              >
                <span className="character-type-emoji">{type.emoji}</span>
                <span className="character-type-label">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className="generate-button"
          onClick={handleGenerateStory}
          disabled={!childName || !selectedTheme || isLoading}
        >
          {isLoading ? 'Creating Silly Story...' : 'Generate Silly Story'}
        </button>

        {error && <p className="error-message">{error}</p>}

        {isLoading && <LoadingAnimation />}

        {story && (
          <div className="story-container">
            <div id="story-content" className="story-content">
              <div className="story-header">
                <h1>{additionalChildren.some(name => name.trim() !== '') ? "Our Magical Story" : `${childName}'s Magical Story`}</h1>
                <p className="story-theme">
                  {additionalChildren.some(name => name.trim() !== '') 
                    ? `Featuring ${childName} and ${additionalChildren.filter(name => name.trim() !== '').join(', ')}` 
                    : `Theme: ${selectedTheme}`}
                </p>
                <p className="story-details">
                  {selectedStoryType && `Story Type: ${selectedStoryType}`}
                  {selectedCharacterType && ` • Character Type: ${selectedCharacterType}`}
                </p>
              </div>
              
              {imageUrl && (
                <div className="story-image-container">
                  <img 
                    src={imageUrl} 
                    alt="Story illustration" 
                    className="story-image"
                    onError={(e) => {
                      console.log('Image failed to load, using fallback');
                      const target = e.target as HTMLImageElement;
                      target.src = getFallbackImage(selectedTheme);
                    }}
                  />
                </div>
              )}
              
              <div className="story-text">
                {story.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="story-footer">
                <p>Created with ❤️ for {additionalChildren.some(name => name.trim() !== '') 
                  ? `${childName} and ${additionalChildren.filter(name => name.trim() !== '').join(', ')}` 
                  : childName}</p>
                <p>Powered By IBM Granite 3.3 & Stable Diffusion</p>
              </div>
            </div>
            <div className="export-container">
              <button 
                onClick={handleExportImage}
                className="export-button"
                disabled={!story}
              >
                Save Memory 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
