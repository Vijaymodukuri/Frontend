import React from 'react';

const Notifications = () => {
  // Fetch notifications data from your API or other data source
  const notifications = [
    { id: 1, text: 'Your application has been submitted.' },
    { id: 2, text: 'New job opportunities available!' },
    // Add more notifications as needed
  ];

  return (
    <div>
      
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
