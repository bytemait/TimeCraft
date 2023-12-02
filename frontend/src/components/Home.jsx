import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <h1>Welcome to TimeCraft AI Scheduler!</h1>
      <div>
        <label htmlFor="prompt">Enter your prompt: </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
        />
      </div>
      <Link to={`/calendar?prompt=${encodeURIComponent(prompt)}`}>
        <button>Go to Calendar</button>
      </Link>
    </div>
  );
};

export default Home;
