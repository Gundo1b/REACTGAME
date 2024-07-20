// AgeVerification.js
import React, { useState } from 'react';
import './AgeVerification.css'

const AgeVerification = ({ onAgeVerified }) => {
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleVerifyAge = () => {
    if (age === '' || isNaN(age) || age < 0) {
      setErrorMessage('Please enter a valid age.');
      return;
    }

    if (parseInt(age) < 18) {
      setErrorMessage('You must be 18 or older to use this app.');
    } else {
      onAgeVerified();
    }
  };

  return (
    <div className="age-verification-container">
      <h2>Welcome to Truth or Dare</h2>
      <p>Please enter your age to continue:</p>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleAgeChange}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleVerifyAge}>Verify Age</button>
    </div>
  );
};

export default AgeVerification;
