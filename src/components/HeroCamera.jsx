import { useRef } from 'react'; // React hook for creating mutable refs
import { useFrame } from '@react-three/fiber'; // Hook for running animations on every frame
import { easing } from 'maath'; // Utility for smooth easing functions

const HeroCamera = ({ isMobile, children }) => {
  // Reference for the group containing the camera and other 3D objects
  const group = useRef();

  useFrame((state, delta) => {
    // Smoothly update the camera position to a fixed point (0, 0, 20)
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // If the device is not mobile, apply smoothing to the group rotation based on pointer movement
    if (!isMobile) {
      // Damp the group rotation based on the pointer's position to create a parallax effect
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  // Render a group element that contains the children components
  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
