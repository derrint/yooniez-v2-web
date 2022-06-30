import React, { Suspense } from 'react';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { useState } from '@overmind/index';

const Banner3d = () => {
  const { yScrollPosition } = useState();

  const Model = ({ scale = 3.5, position = [0, -3.25, 0] }) => {
    const gltf = useGLTF('./assets/3d/silent_ash/scene.gltf');

    return (
      <>
        <primitive object={gltf.scene} scale={scale} position={position} />
      </>
    );
  };

  const modelData = {
    angle: yScrollPosition <= 650 ? 3 - yScrollPosition / 200 : -0.25,
    scale: yScrollPosition <= 650 ? 4 - yScrollPosition / 500 : 2.7,
  };

  return (
    <Canvas style={{ height: 550 }}>
      <ambientLight intensity={0.6} />
      <spotLight
        intensity={0.5}
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} />

      <Suspense fallback={null}>
        <Model scale={modelData.scale} />
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={6}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={1.571}
          maxPolarAngle={1.571}
          minAzimuthAngle={modelData.angle}
          maxAzimuthAngle={modelData.angle}
        />
      </Suspense>
    </Canvas>
  );
};

export default Banner3d;
