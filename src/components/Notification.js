import React from 'react';

/**
 * Notifications component, 
 * pass showNotification prop
 */
const Notification = ({showNotification}) => {
  return (
      // conditional className, notification shows when prop returns true
      /** There are ways to improve this code. Right now the notification is hidden by not being in the window but below it. 
       * I could figure out a way to just not render it if showNotification is false.
       */
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>You have already entered this letter before.</p>
    </div>
  );
}

export default Notification;
