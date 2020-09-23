import React from "react";

const Countdown = ({ days, hours, minutes, seconds, name, startNewEvent }) => {
  return (
    <div className="timer">
      <h1>Countdown to {name}:</h1>
      <ul>
        <li>
          <span>{days}</span>days
        </li>
        <li>
          <span>{hours}</span>Hours
        </li>
        <li>
          <span>{minutes}</span>Minutes
        </li>
        <li>
          <span>{seconds}</span>Seconds
        </li>
      </ul>
      <button onClick={startNewEvent}>Set new event</button>
    </div>
  );
};

export default Countdown;
