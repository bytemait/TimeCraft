import React, { useState } from 'react';

const UserPreferences = ({ onSavePreferences }) => {
  const [workingHours, setWorkingHours] = useState('');

  const handleWorkingHoursChange = (e) => {
    setWorkingHours(e.target.value);
  };

  const handleSavePreferences = () => {
    // Add logic to save user preferences
    onSavePreferences({ workingHours });
  };

  return (
    <div>
      <label htmlFor="workingHours">Working Hours:</label>
      <input
        type="text"
        id="workingHours"
        value={workingHours}
        onChange={handleWorkingHoursChange}
      />
      <button onClick={handleSavePreferences}>Save Preferences</button>
    </div>
  );
};

export default UserPreferences;