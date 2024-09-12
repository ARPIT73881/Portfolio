import { Html, useProgress } from '@react-three/drei'; // Import components and hooks from @react-three/drei for rendering HTML and tracking progress

const CanvasLoader = () => {
  // Use the useProgress hook to get the current loading progress
  const { progress } = useProgress();

  return (
    <Html
      as="div" // Render as a div element
      center // Center the HTML content within the canvas
      style={{
        display: 'flex', // Use flexbox layout
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        flexDirection: 'column', // Arrange children in a column
      }}>
      <span className="canvas-loader"></span> {/* Placeholder for a loading spinner or animation */}
      <p
        style={{
          fontSize: 14, // Set font size
          color: '#F1F1F1', // Set text color
          fontWeight: 800, // Set font weight
          marginTop: 40, // Add margin on top
        }}>
        {/* Display the current progress as a percentage or 'Loading...' if progress is zero */}
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
