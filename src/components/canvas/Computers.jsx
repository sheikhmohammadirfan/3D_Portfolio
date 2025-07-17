import { Suspense, useEffect, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { RectAreaLight } from 'three';
import CanvasLoader from '../Loader';
// import { Const } from 'three/tsl';
// import { use } from 'framer-motion/client';

extend({ RectAreaLight });

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <>
      {/* Added AmbientLight for overall bright base */}
      <ambientLight intensity={0.5} />

      {/* Brighter Hemisphere light */}
      <hemisphereLight intensity={0.5} groundColor="black" />

      {/* Stronger Point light */}
      <pointLight intensity={1.5} />

      {/* Spot light with slight increase */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={2048} // increase shadow quality too
      />

      {/* RectAreaLight for screen glare */}
      <rectAreaLight
        width={2.5}
        height={1.5}
        intensity={3}
        color="#ffffff"
        position={[0, 0, 1.5]}
        rotation={[-Math.PI / 4, 0, 0]}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ?  0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] :[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);      
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);

    }
  }, [])
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
