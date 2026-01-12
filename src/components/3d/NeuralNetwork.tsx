"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 100; // Number of nodes
const CONNECTION_DISTANCE = 4; // Max distance for connections

// Seeded random number generator for deterministic results
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Velocity {
  x: number;
  y: number;
  z: number;
}

// Generate velocities outside component (constant, never changes)
function generateVelocities(COUNT: number): Velocity[] {
  const velocities: Velocity[] = [];
  for (let i = 0; i < COUNT; i++) {
    velocities.push({
      x: (seededRandom(i * 6) - 0.5) * 0.02,
      y: (seededRandom(i * 6 + 1) - 0.5) * 0.02,
      z: (seededRandom(i * 6 + 2) - 0.5) * 0.02,
    });
  }
  return velocities;
}

// Pre-generate initial velocities (will be copied to ref)
const INITIAL_VELOCITIES = generateVelocities(COUNT);

export default function NeuralNetwork() {
  // Generate initial positions using useMemo (only computed once)
  const initialPositions = useMemo(() => {
    const temp = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      temp[i * 3] = (seededRandom(i * 3) - 0.5) * 30;
      temp[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 20;
      temp[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 10;
    }
    return temp;
  }, []);

  // Use ref for velocities - initialize with a copy of the initial velocities
  const velocitiesRef = useRef<Velocity[]>(
    INITIAL_VELOCITIES.map(v => ({ ...v }))
  );

  const pointsRef = useRef<THREE.Points>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame(() => {
    if (!pointsRef.current || !linesGeometryRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const velocities = velocitiesRef.current;

    // Update positions
    for (let i = 0; i < COUNT; i++) {
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];

      x += velocities[i].x;
      y += velocities[i].y;
      z += velocities[i].z;

      // Bounce off walls (simple boundary)
      if (Math.abs(x) > 15) velocities[i].x *= -1;
      if (Math.abs(y) > 10) velocities[i].y *= -1;
      if (Math.abs(z) > 10) velocities[i].z *= -1;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update connections
    const linePositions = [];
    const lineColors = [];
    
    // N^2 complexity - optimize if needed, but for 100 particles it's fine (~5000 checks)
    for (let i = 0; i < COUNT; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < COUNT; j++) {
            const x2 = positions[j * 3];
            const y2 = positions[j * 3 + 1];
            const z2 = positions[j * 3 + 2];

            const dist = Math.sqrt((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2);

            if (dist < CONNECTION_DISTANCE) {
                linePositions.push(x1, y1, z1);
                linePositions.push(x2, y2, z2);

                // Alpha based on distance
                const alpha = 1 - dist / CONNECTION_DISTANCE;
                lineColors.push(0.4, 0.4, 1.0, alpha); // Indigoish
                lineColors.push(0.4, 0.4, 1.0, alpha);
            }
        }
    }

    linesGeometryRef.current.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
    );
    // Since LineBasicMaterial doesn't support vertex alpha easily efficiently in standard Three without custom shader, 
    // we might use transparency with single opacity or use LineSegments with set colors.
    // Actually, LineBasicMaterial vertexColors=true works.
    linesGeometryRef.current.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(lineColors, 4) // RGBA? Three uses RGB usually. Alpha requires transparent=true and opacity.
    );
  });

  return (
    <group>
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[initialPositions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#818cf8" // Indigo-400
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>

        <lineSegments>
            <bufferGeometry ref={linesGeometryRef} />
            <lineBasicMaterial
                color="#6366f1"
                transparent={true}
                opacity={0.3}
                vertexColors={false} // Vertex colors alpha is tricky without shader. Simpler to just use low opacity constant color.
                depthWrite={false}
            />
        </lineSegments>
    </group>
  );
}
