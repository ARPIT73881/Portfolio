// Alert component that displays a notification with a custom type and message
const Alert = ({ type, text }) => {
  return (
    // Fixed positioning at the bottom-right of the screen, ensuring it stays in place
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
      {/* Conditional styling for the alert box based on the type (danger or success) */}
      <div
        className={`p-2 ${
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        } flex items-center rounded-md p-5 leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        role="alert">
        {/* Badge for the alert type (Failed for 'danger', Success for other types) */}
        <p
          className={`flex rounded-full ${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          } mr-3 px-2 py-1 text-xs font-semibold uppercase`}>
          {/* Show 'Failed' if the alert type is danger, otherwise 'Success' */}
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>

        {/* The main text message of the alert, passed as a prop */}
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
