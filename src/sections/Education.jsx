import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Import the Developer 3D model component
import CanvasLoader from '../components/Loading.jsx'; // Import a loading component for suspense fallback
import { education } from '../constants/index.js'; // Import the education data
import Boy from '../components/Boy.jsx';

const Education = () => {
  // State to track which animation is currently playing (default is 'idle')
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <p className="head-text">My Education</p> {/* Section heading */}
        <div className="work-container">
          {/* 3D Canvas Area */}
          <div className="work-canvas cursor-move">
            <Canvas>
              {/* Add ambient light for overall lighting */}
              <ambientLight intensity={7} />
              {/* Spotlight for a more focused light */}
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              {/* Directional light for additional lighting */}
              <directionalLight position={[10, 10, 10]} intensity={1} />
              {/* OrbitControls to allow rotation around the 3D model, but no zoom */}
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              {/* Suspense to load 3D model with fallback loader */}
              <Suspense fallback={<CanvasLoader />}>
                {/* <Developer
                  position-y={-3} // Position the 3D model lower on the canvas
                  scale={3} // Scale the 3D model size
                  animationName={animationName} // Pass the current animation name to the 3D model
                /> */}
                <Boy
                  position-y={-2.8} // Position the 3D model lower on the canvas
                  scale={3} // Scale the 3D model size
                  animationName={animationName} // Pass the current animation name to the 3D model
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Education list section */}
          <div className="work-content pt-4">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {/* Map through education items and render each one */}
              {education.map((item) => (
                <div
                  key={item.id}
                  // Change animation on click
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  // Change animation on hover
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  // Reset animation to 'idle' when not hovering
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex h-full flex-col items-center justify-start py-2">
                    {/* Logo/Icon for each education item */}
                    <div className="work-content_logo">
                      <img className="h-full w-full" src={item.icon} alt={`${item.title} icon`} />
                    </div>
                    {/* Divider line */}
                    <div className="work-content_bar" />
                  </div>

                  {/* Education details */}
                  <div className="px-2.5 py-5 sm:p-5">
                    <p className="pb-2 font-bold text-white-800">{item.title}</p> {/* Education title */}
                    <p className="text-sm">{item.name}</p> {/* Institution name */}
                    <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span> {/* Position and duration */}
                    </p>
                    {/* Detailed description of the education */}
                    <p className="transition-all duration-500 ease-in-out group-hover:text-white">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
