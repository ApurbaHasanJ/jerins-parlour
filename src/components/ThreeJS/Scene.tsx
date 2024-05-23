"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./Model";
import { Machine } from "./Machine";

const Scene = () => {
  return (
    <Canvas>
      <Environment preset="studio" />
      <OrbitControls />

      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
      </mesh> */}
      {/* <Model/> */}
      <Machine />
    </Canvas>
  );
};

export default Scene;
