import React, { useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import EventForm from "./components/EventForm";

const App = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [minutes, setMinutes] = useState(99);
  const [days, setDays] = useState(99);
  const [hours, setHours] = useState(99);
  const [seconds, setSeconds] = useState(99);
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // form submitted correctly then start timer
  const submitForm = (event) => {
    event.preventDefault();
    if (date === "" || name === "") {
      setErrorMessage("Event name or day is missing!");
    } else if (new Date(date) < new Date()) {
      setErrorMessage("Check date!");
    } else {
      setTimer(
        setInterval(() => {
          calculateCountdown();
        }, 1000)
      );
      setShowTimer(true);
      setErrorMessage("");
    }
  };

  // Eventhandlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Calculate time to event and set time
  const calculateCountdown = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const countDown = new Date(date).getTime();

    let dateNow = new Date().getTime();
    let timeTo = countDown - dateNow;

    setDays(Math.floor(timeTo / day));
    setHours(Math.floor((timeTo % day) / hour));
    setMinutes(Math.floor((timeTo % hour) / minute));
    setSeconds(Math.floor((timeTo % minute) / 1000));
  };

  // clear timer and load EventForm
  const startNewEvent = () => {
    setDays(99);
    setHours(99);
    setMinutes(99);
    setSeconds(99);
    setTimer(clearInterval(timer));
    setName("");
    setDate("");
    setShowTimer(false);
  };

  if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
    clearInterval(timer);
    alert("Countdown is ready!");
    startNewEvent();
  }

  return (
    <div className="container">
      <h1>COUNTDOWN TIMER</h1>
      {!showTimer ? (
        <EventForm
          submitForm={submitForm}
          handleDateChange={handleDateChange}
          handleNameChange={handleNameChange}
          errorMessage={errorMessage}
        />
      ) : (
        <Countdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          name={name}
          startNewEvent={startNewEvent}
        />
      )}
    </div>
  );
};

export default App;
