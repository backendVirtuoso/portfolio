"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function SpaceBackground() {
  return (
    <>
      {/* 별들 */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* 추가 별 레이어 */}
      <Stars
        radius={50}
        depth={30}
        count={2000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50
      positions[i + 1] = (Math.random() - 0.5) * 50
      positions[i + 2] = (Math.random() - 0.5) * 50
    }
    
    return positions
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function ThreeScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }} 
      style={{ background: "linear-gradient(to bottom, #000000, #0a0a1a, #1a0a2e)" }}
    >
      <SpaceBackground />
      <FloatingParticles />
      <ambientLight intensity={0.2} />
    </Canvas>
  )
}
