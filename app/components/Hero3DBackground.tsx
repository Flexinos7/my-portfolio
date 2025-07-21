"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Stars } from "@react-three/drei";

function MovingOrb({ color, position, scrollY, speed = 1, rotSpeed = 0.01, floatSpeed = 1 }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    if (mesh.current) {
      // Parallax: move up/down with scroll
      const scroll = scrollY?.get?.() || 0;
      // Floating animation
      const t = clock.getElapsedTime();
      mesh.current.position.y = position[1] + Math.sin(t * floatSpeed + position[0]) * 0.3 + scroll / (200 / speed);
      mesh.current.position.x = position[0] + Math.cos(t * floatSpeed + position[1]) * 0.2;
      mesh.current.rotation.y += rotSpeed;
      mesh.current.rotation.x += rotSpeed / 2;
    }
  });
  return (
    <mesh ref={mesh} position={position} castShadow receiveShadow>
      <sphereGeometry args={[0.7, 48, 48]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.7}
        transparent
        opacity={0.7}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

export default function Hero3DBackground({ scrollY }) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      shadows
    >
      <Stars radius={50} depth={10} count={3000} factor={4} fade />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <MovingOrb color="#10B981" position={[-1.5, 0, 0]} scrollY={scrollY} speed={1.2} rotSpeed={0.012} floatSpeed={1.1} />
      <MovingOrb color="#3B82F6" position={[1.5, 0.5, 0]} scrollY={scrollY} speed={0.8} rotSpeed={0.009} floatSpeed={1.3} />
      <MovingOrb color="#fff" position={[0, -1, 0]} scrollY={scrollY} speed={1.5} rotSpeed={0.015} floatSpeed={1.5} />
      <MovingOrb color="#10B981" position={[0.7, 1.2, -1]} scrollY={scrollY} speed={1.1} rotSpeed={0.011} floatSpeed={1.2} />
      <MovingOrb color="#3B82F6" position={[-1.2, -1.3, -0.5]} scrollY={scrollY} speed={0.9} rotSpeed={0.013} floatSpeed={1.4} />
    </Canvas>
  );
} 