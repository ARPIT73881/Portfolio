import { useState } from 'react';

const useAlert = () => {
  // Initialize state for the alert
  // 'show' determines if the alert is visible
  // 'text' is the message displayed in the alert
  // 'type' is the style or type of the alert (e.g., 'danger', 'success')
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

  // Function to show the alert
  // Accepts 'text' (message), 'type' (alert type, defaults to 'danger'), and 'duration' (time to auto-hide, defaults to 3000ms or 3 seconds)
  const showAlert = ({ text, type = 'danger', duration = 3000 }) => {
    // Set the alert state to show the alert with the specified message and type
    setAlert({ show: true, text, type });

    // Automatically hide the alert after the specified duration
    setTimeout(() => {
      // Reset the alert state to hide the alert after the timeout
      setAlert({ show: false, text: '', type: 'danger' });
    }, duration);
  };

  // Function to manually hide the alert (can be used when the user clicks close, etc.)
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  // Return the current alert state and the functions to show and hide the alert
  return { alert, showAlert, hideAlert };
};

export default useAlert;
