// Tutorial.js
import React from 'react';
import './Tutorial.css'; // Import your CSS for styling

const Tutorial = ({ onClose }) => {
  return (
    <div className="tutorial-container">
      <h2>How to Play Truth or Dare</h2>
      <div className="tutorial-content">
        <p>Welcome to Truth or Dare! Here's how to play:</p>
        <ul>
          <li><strong>Choose a Game Mode:</strong> Select from Truth or Dare, Never Have I Ever, or Truth, Dare, or Drink.</li>
          <li><strong>Follow Instructions:</strong> Click on buttons to receive a truth question, a dare, or a statement.</li>
          <li><strong>Have Fun:</strong> Answer truthfully or complete dares with your friends!</li>
        </ul>
        <p className="disclaimer">This app is for adults and couples only.</p>
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default Tutorial;
