"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getTheme } from "@/utils/theme";

interface SnowProps {
  count?: number;
  color: string;
}

function Snow({ count = 200, color }: SnowProps) {
  const mesh = useRef<THREE.Points>(null);
  const particles = useRef<Float32Array>();

  if (!particles.current) {
    particles.current = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      particles.current[i] = (Math.random() - 0.5) * 10;
      particles.current[i + 1] = Math.random() * 10;
      particles.current[i + 2] = (Math.random() - 0.5) * 10;
    }
  }

  useFrame(() => {
    if (!mesh.current) return;
    for (let i = 1; i < count * 3; i += 3) {
      particles.current![i] -= 0.01;
      if (particles.current![i] < -5) {
        particles.current![i] = 5;
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.current.length / 3}
          array={particles.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} />
    </points>
  );
}

export default function ChristmasScene() {
  const theme = getTheme();
  const snowColor = theme === "christmas" ? "#fff" : "#FFD700";

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Snow color={snowColor} />
      </Canvas>
    </div>
  );
}
