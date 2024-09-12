import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { useGraph } from '@react-three/fiber';

const Boy = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load the GLTF model
  const { scene } = useGLTF('/models/animations/boy.glb');

  // Clone the scene to prevent sharing resources between multiple components
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Use the cloned graph (nodes, materials)
  const { nodes, materials } = useGraph(clone);

  // Load FBX animations
  const idleAnimation = useFBX('/models/animations/idle.fbx');
  const victoryAnimation = useFBX('/models/animations/victory.fbx');
  const saluteAnimation = useFBX('/models/animations/salute.fbx');
  const clappingAnimation = useFBX('/models/animations/clapping.fbx');

  // Set the names of the animations
  idleAnimation.animations[0].name = 'idle';
  victoryAnimation.animations[0].name = 'victory';
  saluteAnimation.animations[0].name = 'salute';
  clappingAnimation.animations[0].name = 'clapping';

  // Combine all animations into one array
  const allAnimations = [
    idleAnimation.animations[0],
    victoryAnimation.animations[0],
    saluteAnimation.animations[0],
    clappingAnimation.animations[0],
  ];

  // Use animations from the FBX files
  const { actions } = useAnimations(allAnimations, group);

  // Switch the animation based on the animationName prop
  useEffect(() => {
    // Reset and play the selected animation
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    // Clean up previous animation
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

// Preload the GLTF model
useGLTF.preload('/models/animations/boy.glb');

export default Boy;
