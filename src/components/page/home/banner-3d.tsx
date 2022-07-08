import React, { Suspense } from 'react';

import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { useState } from '@overmind/index';

const Banner3d = () => {
  const { yScrollPosition } = useState();

  const Model = ({ scale = 3.5, position = [0, -2.2, 0] }) => {
    const gltf = useGLTF('./assets/3d/level_char/scene.gltf');

    return (
      <>
        <primitive object={gltf.scene} scale={scale} position={position} />
      </>
    );
  };

  const degreesToRadians = (degrees: any) => {
    const pi = Math.PI;
    return degrees * (pi / 180);
  };

  const calcWindowHeight = (height: number) => {
    return (height * 4) / 5;
  };

  React.useEffect(() => {
    // if (yScrollPosition > calcWindowHeight(window.innerHeight)) {
    // const position =
    //   -2 - yScrollPosition / calcWindowHeight(window.innerHeight);
    // console.log({ position });
    // }
  }, [yScrollPosition]);

  const modelData =
    typeof window !== 'undefined'
      ? {
          angle:
            yScrollPosition <= calcWindowHeight(window.innerHeight)
              ? degreesToRadians(
                  (yScrollPosition / calcWindowHeight(window.innerHeight)) * 360
                )
              : degreesToRadians(0),
          scale:
            yScrollPosition <= calcWindowHeight(window.innerHeight)
              ? 2.9 - yScrollPosition / calcWindowHeight(window.innerHeight)
              : 1.9,
        }
      : {
          angle: 0,
          scale: 0,
        };

  return (
    <Canvas>
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
        <Model scale={modelData.scale / 120} />
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={6}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={degreesToRadians(90)}
          maxPolarAngle={degreesToRadians(90)}
          minAzimuthAngle={modelData.angle}
          maxAzimuthAngle={modelData.angle}
        />
      </Suspense>
    </Canvas>
  );
};

export default Banner3d;
