import React, { useState } from 'react';
import './App.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CustomCalendar = () => {
  const [calendarData, setCalendarData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1, // Months are zero-indexed
    events: {
      '2023-12-05': 'Meeting with Team',
      '2023-12-10': 'Lunch with Client',
      // Add more events as needed
    },
  });

  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(calendarData.year, calendarData.month);
    const firstDayOfMonth = new Date(calendarData.year, calendarData.month - 1, 1).getDay();

    let calendar = [];
    let dayCounter = 1;

    // Create the header row with day names
    calendar.push(
      <div key="header" className="row">
        {daysOfWeek.map(day => (
          <div key={day} className="cell day-name">
            {day}
          </div>
        ))}
      </div>
    );

    // Create the rows for each week
    for (let i = 0; i < 6; i++) {
      let row = [];

      for (let j = 0; j < 7; j++) {
        const isBeforeFirstDay = i === 0 && j < firstDayOfMonth;
        const isAfterLastDay = dayCounter > daysInMonth;

        // Create an empty cell if before the first day or after the last day
        if (isBeforeFirstDay || isAfterLastDay) {
          row.push(
            <div key={`${i}-${j}`} className="cell empty">
              {''}
            </div>
          );
        } else {
          // Format the date to 'YYYY-MM-DD'
          const formattedDate = `${calendarData.year}-${String(calendarData.month).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
          // Check if there's an event for the current date
          const event = calendarData.events[formattedDate];

          row.push(
            <div key={`${i}-${j}`} className={`cell ${event ? 'has-event' : ''}`}>
              <div className="day">{dayCounter}</div>
              {event && <div className="event">{event}</div>}
            </div>
          );

          dayCounter++;
        }
      }

      // Add the week row to the calendar
      calendar.push(<div key={i} className="row">{row}</div>);
    }

    return calendar;
  };

  return (
    <div className="custom-calendar">
      <h2>{`${calendarData.year} - ${calendarData.month}`}</h2>
      <div className="calendar">{renderCalendar()}</div>
    </div>
  );
};

export default CustomCalendar;
