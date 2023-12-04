import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to TimeCraft AI Scheduler!</h1>
      <div className="mb-4">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-600">Enter your prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={handlePromptChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <Link to={`/calendar?prompt=${encodeURIComponent(prompt)}`} className="inline-block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Go to Calendar</button>
      </Link>
      <div className="mt-4">
        {/* Google Calendar iframe */}
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=YW1hbm11ZGdpbDkxOEBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          style={{ border: 'solid 1px #777', width: '800px', height: '600px' }}
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default Home;
