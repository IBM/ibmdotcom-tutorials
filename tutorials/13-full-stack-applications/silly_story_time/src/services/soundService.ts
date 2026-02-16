// Sound service for handling sound effects in the application

// Create an audio element for hover sound
const hoverSound = new Audio('/sounds/hover.mp3');
hoverSound.volume = 0.3; // Set volume to 30%

// Create an audio element for rimshot sound
const rimshotSound = new Audio('/sounds/rimshot.mp3');
rimshotSound.volume = 0.5; // Set volume to 50%

/**
 * Play the hover sound effect
 */
export const playHoverSound = (): void => {
  // Reset the audio to the beginning if it's already playing
  hoverSound.currentTime = 0;
  // Play the sound
  hoverSound.play().catch(error => {
    console.error('Error playing hover sound:', error);
  });
};

/**
 * Play the rimshot sound effect when a story has finished generating
 */
export const playRimshotSound = (): void => {
  // Reset the audio to the beginning if it's already playing
  rimshotSound.currentTime = 0;
  // Play the sound
  rimshotSound.play().catch(error => {
    console.error('Error playing rimshot sound:', error);
  });
}; 