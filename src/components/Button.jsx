// Button component with optional 'isBeam' animation and customizable styles
const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    // Button element with dynamic class name, allowing custom styles via containerClass prop
    <button className={`btn ${containerClass}`}>
      {/* Conditionally render the "beam" effect if isBeam is true */}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          {/* Outer pulsating animation */}
          <span className="btn-ping"></span>

          {/* Inner dot for the beam animation */}
          <span className="btn-ping_dot"></span>
        </span>
      )}

      {/* Button label with hover effect: scales up and changes text color when hovered */}
      <span className="transition duration-300 ease-in-out hover:scale-105 hover:text-white">
        {name} {/* Display the button text passed via the 'name' prop */}
      </span>
    </button>
  );
};

export default Button;
