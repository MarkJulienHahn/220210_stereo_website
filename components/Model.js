import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Test(props) {
  const { nodes, materials } = useGLTF("/logo.glb");
  const meshRef = useRef(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.z -= 0.01;
    // meshRef.current.rotation.y -= 0.001;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow 
        geometry={nodes.SADFACE.geometry}
        material={materials["Shiny Plastic.001"]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2.2, 0, 0]}
      />
    </group>
  );
}
