import React from "react";

import Box from "../components/Box";
import Logo from "../components/Logo";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeDObject = () => {
  const canvas = { width: "100vw", height: "100vh" };
  return (
    <>
      <Canvas style={canvas}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Logo />
      </Canvas>
    </>
  );
};

export default ThreeDObject;
