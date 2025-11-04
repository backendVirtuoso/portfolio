"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function ServerCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.8}
          roughness={0.2}
          emissive="#4f46e5"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function DatabaseCylinder({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position}>
        <cylinderGeometry args={[0.6, 0.6, 1.2, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.7}
          roughness={0.3}
          emissive="#0891b2"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function APINode({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={position}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.6}
          roughness={0.4}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function ConnectionLines() {
  const points = useMemo(
    () =>
      new Float32Array([
        -2.5, 0, 0,
        0, 0, 0,
        2.5, 0, 0,
      ]),
    []
  )

  return (
    <group>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" opacity={0.3} transparent />
      </line>
    </group>
  )
}

export function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />

      <ServerCube position={[-2.5, 0, 0]} />
      <DatabaseCylinder position={[0, 0, 0]} />
      <APINode position={[2.5, 0, 0]} />

      <ConnectionLines />

      {/* Text3D는 폰트 파일이 필요하므로 주석 처리
      <Center position={[0, -2.5, 0]}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.4} height={0.1} curveSegments={12}>
          Backend Developer
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.8}
            roughness={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
      */}

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
