import React from "react";

const EventForm = ({
  submitForm,
  handleDateChange,
  handleNameChange,
  errorMessage,
}) => {
  return (
    <form onSubmit={submitForm}>
      <legend>Add event info</legend>
      <label htmlFor="name">Event name:</label>
      <input type="text" id="name" onChange={handleNameChange}></input>
      <label htmlFor="date">Event date:</label>
      <input type="date" id="date" onChange={handleDateChange}></input>
      <p>{errorMessage}</p>
      <input type="submit" value="Start timer"></input>
    </form>
  );
};

export default EventForm;
