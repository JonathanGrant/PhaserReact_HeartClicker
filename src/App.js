import React, { useState } from 'react';
import './App.css';
import HeartGame from './heart_game';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App custom-cursor">
      <header className="App-header">
        <p>Score: {score}</p>
        <HeartGame score={score} setScore={setScore} />
      </header>
    </div>
  );
}

export default App;

