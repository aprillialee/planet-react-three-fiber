import React, { useMemo } from "react";
import stars from "../assets/background.jpg";

import * as THREE from "three";

const Plane = () => {
  const starTexture = useMemo(() => new THREE.TextureLoader().load(stars), [
    stars,
  ]);
  return (
    <mesh position={[0, -0.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[20, 10]} />
      <meshPhysicalMaterial attach="material" map={starTexture} />
    </mesh>
  );
};

export default Plane;
