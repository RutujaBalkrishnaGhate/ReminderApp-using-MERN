import React from 'react';
import './ReminderItem.scss';

/**
 * Renders a single reminder item with the given properties.
 * @param {string} _id - The unique identifier of the reminder.
 * @param {string} title - The title of the reminder.
 * @param {boolean} completed - Whether the reminder has been completed or not.
 * @param {function} clickHandler - A function to call when the reminder item is clicked.
 * @returns {JSX.Element} - A React component representing a single reminder item.
 */
const ReminderItem = function ({ _id, title, completed, clickHandler }) {
  const cssClass = completed ? 'course-item-active' : 'course-item-inactive';

  /**
   * Handles the click event of the reminder item.
   * Calls the clickHandler function only if the reminder is completed.
   */
  const handleClick = () => {
    if (completed) {
      clickHandler(_id);
    }
  };

  return (
    <div className={`reminder-item ${cssClass}`} onClick={handleClick}>
      {title}
    </div>
  );
};

//Export ReminderItem
export default ReminderItem;
