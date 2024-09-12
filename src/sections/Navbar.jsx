import { useState } from 'react';

import { navLinks } from '../constants/index.js'; // Import navigation links from constants

// Component for rendering navigation items
const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li transition duration-300 ease-in-out hover:scale-105 hover:text-white">
        {/* The onClick prop is passed to handle closing of the mobile menu */}
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name} {/* Display the name of the navigation item */}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle (open/close)

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the mobile menu
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
      {' '}
      {/* Fixed navbar at the top */}
      <div className="mx-auto max-w-7xl">
        {' '}
        {/* Container to limit the width */}
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <div className="flex items-center justify-center">
            {/* Logo or brand name */}
            <a
              href="/"
              className="text-xl font-bold text-neutral-400 transition duration-300 ease-in-out hover:scale-105 hover:text-white">
              Arpit
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 transition duration-300 ease-in-out hover:scale-105 hover:text-white focus:outline-none sm:hidden" // Hidden on larger screens
            aria-label="Toggle menu">
            {/* Toggle between menu and close icons based on the isOpen state */}
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="h-6 w-6" />
          </button>

          {/* Desktop navigation items */}
          <nav className="hidden sm:flex">
            {' '}
            {/* Hidden on small screens */}
            <NavItems />
          </nav>
        </div>
      </div>
      {/* Mobile navigation sidebar */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {' '}
        {/* Expand/collapse based on isOpen */}
        <nav className="p-5">
          {/* Pass closeMenu function to NavItems to close the menu on click */}
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
