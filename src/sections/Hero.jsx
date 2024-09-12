import { Leva } from 'leva'; // Leva is a GUI for adjusting parameters
import { Suspense } from 'react'; // Suspense is used to handle lazy loading
import { Canvas } from '@react-three/fiber'; // Canvas is the 3D rendering context from react-three-fiber
import { useMediaQuery } from 'react-responsive'; // Custom hook to handle media queries for responsive design
import { PerspectiveCamera } from '@react-three/drei'; // A perspective camera component for 3D rendering

import Cube from '../components/Cube.jsx'; // 3D Cube component
import Button from '../components/Button.jsx'; // Custom button component
import CanvasLoader from '../components/Loading.jsx'; // Loading spinner while 3D content is loaded
import HeroCamera from '../components/HeroCamera.jsx'; // Custom camera controller component
import { calculateSizes } from '../constants/index.js'; // Function to calculate responsive sizes
import { HackerRoom } from '../components/HackerRoom.jsx'; // 3D Hacker Room scene component

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 }); // Small screen query (e.g., phones)
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Mobile screen query (e.g., tablets in portrait mode)
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 }); // Tablet screen query

  // Calculate responsive sizes for different 3D objects based on the screen size
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex min-h-screen w-full flex-col" id="home">
      {/* Header content: Introduction text */}
      <div className="c-space gap-30 mx-auto mt-24 flex w-full flex-col md:mt-28 lg:mt-20">
        <p className="text-center font-generalsans text-xl font-medium text-white sm:text-3xl">
          Hi,<span className="waving-hand">👋</span> I am Arpit
        </p>
        <p className="hero_tag text-gray_gradient">Welcome to my Portfolio</p>
      </div>

      {/* 3D Canvas for rendering interactive 3D objects */}
      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Hide the Leva GUI */}
            <Leva hidden />
            {/* Perspective camera for the 3D scene */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            {/* Custom camera controls */}
            <HeroCamera isMobile={isMobile}>
              {/* 3D Hacker Room scene */}
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            {/* Grouping 3D objects */}
            <group>
              <Cube
                scale={sizes.cubeScale}
                position={sizes.cubePosition1}
                textureImage="/textures/cube1.png"
                rotationSpeed={1}
                hoverRotationSpeed={2}
              />
              <Cube
                scale={sizes.cubeScale}
                position={sizes.cubePosition2}
                textureImage="/textures/cube2.png"
                rotationSpeed={2}
                hoverRotationSpeed={4}
              />
              <Cube
                scale={sizes.cubeScale}
                position={sizes.cubePosition3}
                textureImage="/textures/cube3.png"
                rotationSpeed={2}
                hoverRotationSpeed={4}
              />
              <Cube
                scale={sizes.cubeScale}
                position={sizes.cubePosition4}
                textureImage="/textures/cube4.png"
                rotationSpeed={1}
                hoverRotationSpeed={2}
              />
            </group>

            {/* Ambient and directional lighting for the 3D scene */}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Button at the bottom of the Hero section to navigate to the About section */}
      <div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
