import React, { useState, useEffect } from 'react';
import './ReminderList.scss';
import ReminderItem from '../ReminderItem/ReminderItem';
import ReminderForm from '../ReminderForm/ReminderForm';

const ReminderList = function () {
  // Define state variables to hold reminders and track whether a new reminder was added
  const [reminders, setReminders] = useState([]);
  const [addedReminder, setAddedReminder] = useState(false);
  // Define state variables to show and hide the details for a specific reminder
  const [showDetails, setShowDetails] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  // Define state variable to show and hide the form for adding a new reminder
  const [showForm, setShowForm] = useState(false);

  // Fetch the list of reminders from the server when the component is mounted or when a new reminder is added
  const fetchReminders = async () => {
    try {
      const response = await fetch('http://localhost:9090/reminderList');
      const data = await response.json();
      setReminders(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, [addedReminder]);

  // Toggle the completed status of a specific reminder
  const toggleStatus = async (_id) => {
    const reminderToUpdate = reminders.find((reminder) => reminder._id === _id);
    const updatedReminder = { ...reminderToUpdate, completed: !reminderToUpdate.completed };
    try {
      const response = await fetch(`http://localhost:9090/reminderList/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReminder),
      });
      if (response.ok) {
        const updatedReminders = reminders.map((reminder) =>
          reminder._id === _id ? updatedReminder : reminder
        );
        setReminders(updatedReminders);
        setSelectedReminder(updatedReminder);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a specific reminder
  const deleteReminder = async (_id) => {
    try {
      const response = await fetch(`http://localhost:9090/reminderList/${_id}`, { method: 'DELETE' });
      if (response.ok) {
        const updatedReminders = reminders.filter((reminder) => reminder._id !== _id);
        setReminders(updatedReminders);
        window.alert('Reminder has been deleted!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render a list of ReminderItems based on the list of reminders
  const reminderItems = reminders.filter((reminder) => reminder.title !== '').map((reminder) => (
    <div key={reminder._id}>
      <ReminderItem _id={reminder._id} title={reminder.title} completed={reminder.completed} clickHandler={toggleStatus} />
      <button className="Detailsbtn" onClick={() => { setShowDetails(true); setSelectedReminder(reminder); }}>Details</button>
      <button className="Deletebtn" onClick={() => { deleteReminder(reminder._id); }}>Delete</button>
    </div>
  ));

  // Function to add a new reminder
  const addReminder = () => {
    setAddedReminder(true);
    setShowForm(false);
  };

  const handleToggleStatus = async () => {
    const _id = selectedReminder._id;
    const updatedReminder = { ...selectedReminder, completed: !selectedReminder.completed };
    try {
      const response = await fetch('http://localhost:9090/reminderList/' + _id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReminder),
        });
        if (response.ok) {
        const updatedReminders = reminders.map((reminder) =>
        reminder._id === _id ? updatedReminder : reminder
        );
        setReminders(updatedReminders);
        setSelectedReminder(updatedReminder);
        window.alert('Task status changed successfully!');
        }
        } catch (error) {
        console.error(error);
        }
        };
        
        const handleCloseDetails = () => {
        setShowDetails(false);
        };
        
        // Render the list of reminders, add reminder form, and reminder details (if applicable)
        
        return (
        <div>
        <button className="Addbtn" onClick={() => setShowForm(true)}>Add Reminder</button>
        {showForm && <ReminderForm onAddReminder={addReminder} />}
        {showDetails && selectedReminder && (
        <div className='Details'>
        <h3>Details for reminder: {selectedReminder.title}</h3>
        <p>Description: {selectedReminder.description}</p>
        <p>Completed: {selectedReminder.completed ? 'Yes' : 'No'}</p>
        <p>Created Date: {selectedReminder.createDate}</p>
        <p>Modified Date: {selectedReminder.modifiedDate}</p>
        <button className="Compbtn" onClick={handleToggleStatus}>Mark as completed</button>
        <button className="Closebtn" onClick={handleCloseDetails}>Close</button>
        </div>
        )}
        {reminderItems}
        </div>
        );
        };
        
        export default ReminderList;