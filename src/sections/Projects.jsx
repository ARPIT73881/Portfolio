import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

// Number of projects available
const projectCount = myProjects.length;

const Projects = () => {
  // State to keep track of the currently selected project index
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Function to handle project navigation (previous or next)
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // GSAP animation for animatedText elements
  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  // Current project details based on selected index
  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      {/* Heading for the projects section */}
      <p className="head-text">My Personal Projects</p>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Project details container */}
        <div className="relative flex flex-col gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
          {/* Spotlight image */}
          <div className="absolute right-0 top-0">
            <img src={currentProject.spotlight} alt="spotlight" className="h-96 w-full rounded-xl object-cover" />
          </div>

          {/* Project logo with backdrop blur */}
          <div className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter" style={currentProject.logoStyle}>
            <img
              className="h-10 w-10 shadow-sm transition duration-300 ease-in-out hover:scale-125"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          {/* Project title, description, and subtitle */}
          <div className="mb-7 mt-5 flex flex-col gap-5 text-white-600">
            <p className="animatedText text-2xl font-semibold text-white">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tags and external link */}
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              {/* Displaying project tags with tooltips */}
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo group relative">
                  {/* Tag image */}
                  <img src={tag.path} alt={tag.name} className="transition duration-300 ease-in-out hover:scale-125" />
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-black-300 px-3 py-1 text-xs text-white-700 opacity-0 transition-opacity group-hover:opacity-100">
                    {tag.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Link to the live site */}
            <a
              className="flex cursor-pointer items-center gap-3 text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p className="transition duration-300 ease-in-out hover:scale-105 hover:text-white">Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="h-3 w-3" />
            </a>
          </div>

          {/* Navigation buttons */}
          <div className="mt-2 flex items-center justify-between">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="h-4 w-4 transition duration-300 ease-in-out hover:scale-125"
              />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="h-4 w-4 transition duration-300 ease-in-out hover:scale-125"
              />
            </button>
          </div>
        </div>

        {/* 3D model canvas */}
        <div className="h-96 cursor-move rounded-lg border border-black-300 bg-black-200 md:h-full">
          <Canvas>
            {/* Lighting */}
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              {/* Suspense fallback while the model is loading */}
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.1} position={[-0.3, -3, 0.1]} rotation={[0.02, 0, 0]}>
                  {/* DemoComputer component with texture */}
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            {/* Orbit controls for the canvas */}
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
