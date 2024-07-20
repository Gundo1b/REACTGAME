// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling
import AgeVerification from './AgeVerification';
import GameModeSelector from './GameModeSelector';
import TruthOrDare from './TruthOrDare';
import NeverHaveIEver from './NeverHaveIEver';
import TruthDareOrDrink from './TruthDareOrDrink';
import Tutorial from './Tutorial'; // Import the Tutorial component

const App = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [currentGameMode, setCurrentGameMode] = useState('');
  const [showTutorial, setShowTutorial] = useState(false); // State to control tutorial visibility

  const handleAgeVerification = () => {
    setAgeVerified(true);
  };

  const handleGameModeSelect = (mode) => {
    setCurrentGameMode(mode);
  };

  const handleOpenTutorial = () => {
    setShowTutorial(true);
  };

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <div className="app">
      {!ageVerified && <AgeVerification onAgeVerified={handleAgeVerification} />}
      {ageVerified && !currentGameMode && (
        <div>
          <GameModeSelector onSelect={handleGameModeSelect} />
          <button className="tutorial-button" onClick={handleOpenTutorial}>
            How to Play
          </button>
        </div>
      )}
      {ageVerified && currentGameMode === 'TruthOrDare' && <TruthOrDare />}
      {ageVerified && currentGameMode === 'NeverHaveIEver' && <NeverHaveIEver />}
      {ageVerified && currentGameMode === 'TruthDareOrDrink' && <TruthDareOrDrink />}
      
      {/* Render the Tutorial component if showTutorial state is true */}
      {showTutorial && <Tutorial onClose={handleCloseTutorial} />}
    </div>
  );
};

export default App;
