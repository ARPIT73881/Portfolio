// Importing section components for the main application layout
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Testimonials.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';

// Main App component
const App = () => {
  return (
    // Main container for the app, with some styling for layout
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
