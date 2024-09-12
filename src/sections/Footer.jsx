const Footer = () => {
  return (
    // Footer container with flexbox, spacing, border, and padding styles
    <footer className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pb-4 pt-7">
      {/* Terms & Conditions and Privacy Policy links */}
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p> {/* Divider between links */}
        <p>Privacy Policy</p>
      </div>

      {/* Social media icons */}
      <div className="flex gap-3">
        {/* GitHub icon */}
        <div className="social-icon">
          <a
            href="https://www.github.com/arpit73881"
            className="h-1/2 w-1/2 transition duration-300 ease-in-out hover:scale-125"
            target="_blank"
            rel="noreferrer">
            <img src="/assets/github.svg" alt="github" className="h-full w-full" /> {/* GitHub logo */}
          </a>
        </div>

        {/* Linkedin icon   */}
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/arpit73881/"
            target="_blank"
            rel="noreferrer"
            className="h-1/2 w-1/2 transition duration-300 ease-in-out hover:scale-125">
            <img src="/assets/linkedin.svg" alt="linkedin" className="h-full w-full" />
            {/* Linkedin logo */}
          </a>
        </div>

        {/* Instagram icon   */}
        <div className="social-icon">
          <a
            href="https://www.instagram.com/arpit73881/"
            target="_blank"
            rel="noreferrer"
            className="h-1/2 w-1/2 transition duration-300 ease-in-out hover:scale-125">
            <img src="/assets/instagram.svg" alt="instagram" className="h-full w-full" />
            {/* Instagram logo */}
          </a>
        </div>

        {/* Facebook icon   */}
        <div className="social-icon">
          <a
            href="https://www.facebook.com/arpit73881/"
            target="_blank"
            rel="noreferrer"
            className="h-1/2 w-1/2 transition duration-300 ease-in-out hover:scale-125">
            <img src="/assets/facebook.svg" alt="facebook" className="h-full w-full" />
            {/* Facebook logo */}
          </a>
        </div>
      </div>

      {/* Copyright notice */}
      <p className="text-white-500">© 2024 Arpit Sharma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
