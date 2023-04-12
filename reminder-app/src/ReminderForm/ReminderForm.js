// This component represents a form for adding a new reminder
import React, { useState } from 'react';
//import './ReminderItem.scss';

// Define state variables to store the values of the input fields
const ReminderForm = function () {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

// Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReminder = {
      title: title,
      description: description,
      date: date,
      time: time,
      completed: false,

    };
    // Send a POST request to the server to add the new reminder
    fetch('http://localhost:9090/reminderList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReminder),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Reminder saved successfully!');
          setTitle('');
          setDescription('');
          window.location.reload();
          window.alert('Reminder added successfully!');


        } else {
          throw new Error('Error saving the reminder');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
// Render the form with input fields for title, description, date, time, and a submit button
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          title="title"
          placeholder="Enter the Title"
          required
          pattern="[A-Za-z]+"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          title="description"
          placeholder="Enter the Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          //_id="date"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          //id="time"
          placeholder="Time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <br />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
};

// Export the ReminderForm component for use in other parts of the application

export default ReminderForm;
