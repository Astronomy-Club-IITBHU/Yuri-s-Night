import { useRef, useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export function GlowingRing({ position = [0, 0, -10], radius = 5, color = '#ff9800' }) {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, 0.3, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export function MeteorShower() {
  const meteorRef = useRef();
  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = Math.random() * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (meteorRef.current) {
      const positions = meteorRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += 0.1;
        positions[i + 1] -= 0.2;
        if (positions[i + 1] < -25) positions[i + 1] = 50;
      }
      meteorRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meteorRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.2} color="#ff5722" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export function SpaceScene() {
  const { camera } = useThree();
  const cameraRef = useRef();
  const starsRef = useRef();

  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0, 20);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (cameraRef.current) {
      const radius = 25;
      cameraRef.current.position.x = Math.sin(time * 0.1) * radius;
      cameraRef.current.position.y = Math.sin(time * 0.05) * radius * 0.25;
      cameraRef.current.position.z = Math.cos(time * 0.1) * radius;
      cameraRef.current.lookAt(0, 0, 0);
    }
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0001;
      starsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 20]} fov={75} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffd700" />
      <Stars ref={starsRef} radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      {/* <GlowingRing position={[-10, 5, -20]} radius={6} color="#00FFFFFF" />
      <GlowingRing position={[15, -10, -30]} radius={4} color="#000FFFFF" />*/}
      <MeteorShower /> 
    </>
  );
}
