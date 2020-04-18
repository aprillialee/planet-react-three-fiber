import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import earthmap from "../assets/earthmap.jpg";
import { useFrame } from "react-three-fiber";

const Sun = () => {
  const earthTexture = useMemo(() => new THREE.TextureLoader().load(earthmap), [
    earthmap,
  ]);
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry attach="geometry" args={[2, 30, 30]} />
      <meshPhongMaterial attach="material" map={earthTexture} />
    </mesh>
  );
};

export default Sun;
