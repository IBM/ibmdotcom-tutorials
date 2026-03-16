import React from 'react';
import { StoryType } from '../types';
import { playHoverSound } from '../services/soundService';

interface StoryTypeSelectorProps {
  selectedType: StoryType | null;
  onSelectType: (type: StoryType) => void;
}

const StoryTypeSelector: React.FC<StoryTypeSelectorProps> = ({
  selectedType,
  onSelectType,
}) => {
  const storyTypes: { type: StoryType; label: string; emoji: string }[] = [
    { type: 'adventure', label: 'Adventure', emoji: '🗺️' },
    { type: 'fantasy', label: 'Fantasy', emoji: '🧙‍♂️' },
    { type: 'educational', label: 'Educational', emoji: '📚' },
    { type: 'bedtime', label: 'Bedtime', emoji: '🌙' },
  ];

  const handleMouseEnter = () => {
    playHoverSound();
  };

  return (
    <div className="story-type-selector">
      <h2>Choose a Story Type</h2>
      <div className="story-type-buttons">
        {storyTypes.map(({ type, label, emoji }) => (
          <button
            key={type}
            className={`story-type-button ${selectedType === type ? 'selected' : ''}`}
            onClick={() => onSelectType(type)}
            onMouseEnter={handleMouseEnter}
          >
            <span className="story-type-emoji">{emoji}</span>
            <span className="story-type-label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryTypeSelector; 