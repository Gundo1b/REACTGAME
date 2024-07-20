// GameModeSelector.js
import React from 'react';
import './GameModeSelector.css'; // Import your CSS for styling

const GameModeSelector = ({ onSelect }) => {
  const handleSelect = (mode) => {
    onSelect(mode);
  };

  return (
    <div className="game-mode-selector">
      <h2>Select a Game Mode:</h2>
      <div className="mode-buttons">
        <button className="mode-button" onClick={() => handleSelect('TruthOrDare')}>
          Truth or Dare
        </button>
        <button className="mode-button" onClick={() => handleSelect('NeverHaveIEver')}>
          Never Have I Ever
        </button>
        <button className="mode-button" onClick={() => handleSelect('TruthDareOrDrink')}>
          Truth, Dare, or Drink
        </button>
      </div>
    </div>
  );
};

export default GameModeSelector;
