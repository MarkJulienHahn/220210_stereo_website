import { Suspense, useRef } from "react";

import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import {
  PresentationControls,
  Environment,
  BakeShadows,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import dynamic from "next/dynamic";

const Model = dynamic(() => import("./Model"));

const ThreeDObject = ({
  windowWidth,
  env = "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/brown_photostudio_02_1k.hdr",
}) => {
  const canvas = { width: "100vw", height: "100%", alignItems: "center" };
  return (
    <div className="storefrontTrialsWrapper" style={{ background: "black" }}>
      <div className="storefrontTrialsInner">
        <Suspense fallback={"loading"}>
          <Canvas
            style={canvas}
            camera={{
              fov: 40,
              zoom: windowWidth > 1000 ? 7 : 4,
              near: 1,
              far: 1000,
            }}
            shadows
          >
            <Environment
              files={env}
              ground={{ height: 5, radius: 40, scale: 20 }}
            />
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Model />
              <BakeShadows />
            </PresentationControls>
            {/* <ambientLight intensity={100} />
          <directionalLight
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[1, 0.5, -0.5]}
            intensity={0.3}
            color="#F5F6CE"
          />
          <directionalLight
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[0.5, 0, 1]}
            intensity={0.31}
          />
          <directionalLight
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[0, -1, 0]}
            intensity={0.02}
            color="#CECEF6"
          />
          <directionalLight
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
            position={[0, 10, 0]}
            intensity={0.1}
            color="#d0ffe1"
          /> */}
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default ThreeDObject;
