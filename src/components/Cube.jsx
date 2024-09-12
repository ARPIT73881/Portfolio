import gsap from 'gsap'; // Importing the GSAP library for animations
import { useGSAP } from '@gsap/react'; // Hook to integrate GSAP in React components
import { useRef, useState } from 'react'; // React hooks for managing state and refs
import { Float, useGLTF, useTexture } from '@react-three/drei'; // Helper functions from Drei for 3D models

// Cube component definition, receiving props
const Cube = ({ textureImage, rotationSpeed = 1, hoverRotationSpeed = 2, ...props }) => {
  // Load the Cube GLTF model and extract the nodes (geometry, materials)
  const { nodes } = useGLTF('models/cube.glb');

  // Load texture to be applied on the cube, using the textureImage prop
  const texture = useTexture(textureImage);

  // Reference to the cube's mesh to apply animations and interactions
  const cubeRef = useRef();

  // State to track whether the cube is hovered or not
  const [hovered, setHovered] = useState(false);

  // GSAP animation hook for animating the cube's rotation
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1, // Infinite loop for the animation
        repeatDelay: 0.5, // Pause between animation cycles
      })
      .to(cubeRef.current.rotation, {
        // Change cube's rotation depending on whether it's hovered or not
        y: hovered ? `+=${hoverRotationSpeed}` : `+=${rotationSpeed * Math.PI * 2}`,
        x: hovered ? `+=${hoverRotationSpeed}` : `-=${rotationSpeed * Math.PI * 2}`,
        duration: 2.5, // Duration of the animation
        stagger: {
          each: 0.15, // Slight delay for the effect
        },
      });
  });

  return (
    // Drei's Float component for floating effect, controlling the cube's float intensity
    <Float floatIntensity={2}>
      {/* The group component allows positioning, rotating, and scaling the cube */}
      <group
        dispose={null} // Ensures proper disposal of the model's assets
        scale={0.7}
        {...props} // Spread any additional props passed to the component
      >
        {/* Mesh component that holds the 3D geometry and material */}
        <mesh
          ref={cubeRef} // Reference for the mesh to control with GSAP
          castShadow // Enables shadows for this mesh
          receiveShadow // Allows this mesh to receive shadows
          geometry={nodes.Cube.geometry} // Cube geometry from the GLTF model
          material={nodes.Cube.material} // Material from the GLTF model
          onPointerEnter={() => setHovered(true)} // Event handler to detect when mouse hovers over the cube
          onPointerLeave={() => setHovered(false)} // Reset hover state when mouse leaves
        >
          {/* Material with texture applied to the cube, using the loaded texture */}
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

// Preloading the cube GLTF model to optimize performance by loading the model in advance
useGLTF.preload('models/cube.glb');

export default Cube; // Exporting the Cube component for use in other parts of the application
