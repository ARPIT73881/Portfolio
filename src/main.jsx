import { StrictMode } from 'react'; // Import React's StrictMode for highlighting potential problems in the application
import { createRoot } from 'react-dom/client'; // Import createRoot to enable React 18 features
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import global CSS styles

// Create the root element where the React app will be rendered
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render the App component inside StrictMode */}
    <App />
  </StrictMode>,
);
