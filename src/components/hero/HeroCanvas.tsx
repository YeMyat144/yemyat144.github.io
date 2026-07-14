import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.04;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      pointer.y * 0.08,
      0.04,
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#171717"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

const HeroCanvas: React.FC = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 45 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
  >
    <ambientLight intensity={0.6} />
    <ParticleField />
  </Canvas>
);

export default HeroCanvas;
