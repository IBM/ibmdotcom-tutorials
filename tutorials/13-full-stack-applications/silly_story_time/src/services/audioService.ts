class AudioService {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private hoverAudio: HTMLAudioElement | null = null;
  private rimshotAudio: HTMLAudioElement | null = null;

  constructor() {
    // Initialize audio elements
    this.audio = new Audio();
    this.audio.loop = true; // Loop the music
    
    this.hoverAudio = new Audio();
    this.hoverAudio.src = '/sounds/background-music.mp3';
    this.hoverAudio.volume = 0.3; // Set volume to 30% for hover sound
    
    this.rimshotAudio = new Audio();
    this.rimshotAudio.src = '/sounds/rimshot.mp3';
    this.rimshotAudio.volume = 0.5; // Set volume to 50% for rimshot sound
  }

  async playBackgroundMusic() {
    if (!this.audio) return;

    try {
      // Use a gentle, calming background music
      this.audio.src = '/sounds/background-music.wav';
      await this.audio.play();
      this.isPlaying = true;
    } catch (error) {
      console.error('Failed to play background music:', error);
    }
  }

  stopBackgroundMusic() {
    if (!this.audio || !this.isPlaying) return;

    try {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    } catch (error) {
      console.error('Failed to stop background music:', error);
    }
  }

  playThemeHoverSound() {
    if (!this.hoverAudio) return;
    
    try {
      // Reset the audio to the beginning
      this.hoverAudio.currentTime = 0;
      // Play the sound
      this.hoverAudio.play().catch(error => {
        console.error('Failed to play hover sound:', error);
      });
    } catch (error) {
      console.error('Failed to play hover sound:', error);
    }
  }
  
  playRimshotSound() {
    if (!this.rimshotAudio) return;
    
    try {
      // Reset the audio to the beginning
      this.rimshotAudio.currentTime = 0;
      // Play the sound
      this.rimshotAudio.play().catch(error => {
        console.error('Failed to play rimshot sound:', error);
      });
    } catch (error) {
      console.error('Failed to play rimshot sound:', error);
    }
  }

  isMusicPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioService = new AudioService(); 