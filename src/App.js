import React from "react";
import { Canvas } from "react-three-fiber";

import Earth from "./Components/Earth.Component";
import Plane from "./Components/Plane.Component";

import "./App.css";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.5}
        position={[-45, 15, 10]}
        penumbra={0.5}
        castShadow
      />
      <Earth />
      <Plane />
    </Canvas>
  );
}

export default App;
