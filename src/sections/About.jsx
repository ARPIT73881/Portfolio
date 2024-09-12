import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  // State to track if the email has been copied to clipboard
  const [hasCopied, setHasCopied] = useState(false);

  // Function to handle email copying
  const handleCopy = () => {
    // Write email to clipboard
    navigator.clipboard.writeText('as.73881@gmail.com');
    // Update state to show copy confirmation
    setHasCopied(true);

    // Reset the copy confirmation state after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        {/* Introduction section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* Image for the introduction */}
            <img src="assets/grid1.png" alt="grid-1" className="h-fit w-full object-contain sm:h-[276px]" />
            <div>
              {/* Heading text for introduction */}
              <p className="grid-headtext">Hi, I’m Arpit Sharma</p>
              {/* Brief introduction */}
              <p className="grid-subtext">
                With over 2 years of experience, I have honed my skills in both frontend and backend dev, creating
                dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* Image for the Tech Stack section */}
            <img src="assets/grid2.png" alt="grid-2" className="h-fit w-full object-contain sm:h-[276px]" />
            <div>
              {/* Heading text for Tech Stack */}
              <p className="grid-headtext">Tech Stack</p>
              {/* Description of tech expertise */}
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        {/* Globe visualization and contact info */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            {/* Globe component displaying a 3D visualization of the Earth */}
            <div className="flex h-fit w-full cursor-grab items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              {/* Flexibility in working with different time zones */}
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
              {/* Contact button */}
              <a href="#contact">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Passion for Coding section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* Image for the Passion for Coding section */}
            <img src="assets/grid3.png" alt="grid-3" className="h-fit w-full object-contain sm:h-[266px]" />
            <div>
              {/* Heading text for Passion for Coding */}
              <p className="grid-headtext">My Passion for Coding</p>
              {/* Description of passion for coding */}
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Contact information section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            {/* Image for the Contact section */}
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />
            <div className="space-y-2">
              {/* Contact label */}
              <p className="grid-subtext text-center">Contact me</p>
              {/* Copy email functionality */}
              <div className="copy-container" onClick={handleCopy}>
                {/* Toggle between copy and success icons */}
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                {/* Email text */}
                <p className="text-gray_gradient font-medium text-white transition duration-300 ease-in-out hover:text-white md:text-xl lg:text-2xl">
                  as.73881@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
