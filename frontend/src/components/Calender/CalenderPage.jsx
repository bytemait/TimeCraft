import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Scheduler from './Scheduler'; // Assuming you have a Scheduler component

const CalendarPage = () => {
  const location = useLocation();
  const [prompt, setPrompt] = useState('');
  // Additional state and logic for fetching and displaying schedule data

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setPrompt(queryParams.get('prompt') || '');
    // Additional logic for fetching schedule data based on the prompt
  }, [location.search]);

  return (
    <div>
      <h2>Calendar Page</h2>
      <p>Prompt: {prompt}</p>
      {/* Additional logic to fetch and display schedule data */}
      <Scheduler scheduleData={"today"} />
    </div>
  );
};

export default CalendarPage;