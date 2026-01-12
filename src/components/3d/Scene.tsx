"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Support high DPI screens
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
