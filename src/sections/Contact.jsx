import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js'; // Custom hook to manage alerts
import Alert from '../components/Alert.jsx'; // Alert component for showing messages

const Contact = () => {
  const formRef = useRef(); // To reference the form DOM element

  // Destructure the alert state and alert handling functions from useAlert
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false); // To manage form submission state (loading spinner)

  // Form state to store name, email, and message
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Function to handle form input changes
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value }); // Update the corresponding form field in state
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Show loading state

    // Send email using emailjs with service ID, template ID, and public key from .env variables
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, // Service ID from environment variable
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID from environment variable
        {
          from_name: form.name, // Sender's name
          to_name: 'Arpit Sharma', // Recipient's name
          from_email: form.email, // Sender's email
          to_email: 'as.73881@gmail.com', // Your email
          message: form.message, // Message content
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY, // Public key from environment variable
      )
      .then(
        () => {
          setLoading(false); // Hide loading state

          // Show success alert
          showAlert({
            show: true,
            text: 'Thank you for your message 😃', // Success message
            type: 'success', // Alert type: success
          });

          // Hide alert and reset form after 3 seconds
          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '', // Reset name
              email: '', // Reset email
              message: '', // Reset message
            });
          }, [3000]); // Timeout duration of 3 seconds
        },
        (error) => {
          setLoading(false); // Hide loading state if there's an error
          console.error(error); // Log the error

          // Show error alert
          showAlert({
            show: true,
            text: "I didn't receive your message 😢", // Error message
            type: 'danger', // Alert type: danger (error)
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />} {/* Render Alert component if alert is visible */}
      <div className="relative flex min-h-screen flex-col items-center justify-center py-20">
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          {/* Form with onSubmit handler */}
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            {/* Full Name field */}
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder=" John Doe"
              />
            </label>

            {/* Email address field */}
            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            {/* Message field */}
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="I wanna give you a job..."
              />
            </label>

            {/* Submit button with loading state */}
            <button className="field-btn hover:" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'} {/* Show loading text if form is submitting */}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>

        {/* Background image */}
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 h-full min-h-screen w-full"
        />
      </div>
    </section>
  );
};

export default Contact;
