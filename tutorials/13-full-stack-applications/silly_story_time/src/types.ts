export type StoryType = 'adventure' | 'fantasy' | 'educational' | 'bedtime';

export interface Story {
  id: string;
  title: string;
  content: string;
  type: StoryType;
  ageRange: string;
  duration: number;
  imageUrl?: string;
}

export interface StoryInputs {
  mainCharacter: string;
  setting: string;
  theme: string;
  storyType: string;
  characterType: string;
  additionalCharacters: string[];
} 