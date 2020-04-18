import React, { useMemo, useRef } from "react";

import { useFrame } from "react-three-fiber";

import { useSpring, a } from "react-spring";
import * as THREE from "three";

function Plane() {
  let meshRef = useRef();
  let theta = 0;
  useFrame(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)));

    meshRef.current.rotation.set(r, r, r);
  });
  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 5, 5);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("white"),
    });
    const coords = new Array(2000)
      .fill()
      .map((i) => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
      ]);
    return [geo, mat, coords];
  }, []);

  return (
    <group ref={meshRef}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

export default Plane;
