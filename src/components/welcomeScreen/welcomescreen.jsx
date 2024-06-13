import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Gra wisielec</h1>
      <Link to="/game">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;