import React from "react";
import { Canvas } from "react-three-fiber";

import Sun from "./Components/Earth.Component";
import Plane from "./Components/Plane.Component";

import "./App.css";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 5, 10]} penumbra={0.5} castShadow />
      <Sun />
      <Plane />
    </Canvas>
  );
}

export default App;
