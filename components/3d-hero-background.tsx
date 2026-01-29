"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import type * as THREE from "three"

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  const shapes = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 10 - 5] as [
        number,
        number,
        number,
      ],
      rotation: Math.random() * Math.PI,
      scale: 0.15 + Math.random() * 0.4,
      speed: 0.2 + Math.random() * 0.4,
      type: i % 3,
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} index={i} />
      ))}
    </group>
  )
}

function FloatingShape({
  position,
  rotation,
  scale,
  speed,
  type,
  index,
}: {
  position: [number, number, number]
  rotation: number
  scale: number
  speed: number
  type: number
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 0.5
    }
  })

  const color = type === 0 ? "#38bdf8" : type === 1 ? "#1d4ed8" : "#22d3ee"

  return (
    <mesh ref={meshRef} position={position} rotation={[rotation, rotation, 0]} scale={scale}>
      {type === 0 && <octahedronGeometry args={[1, 0]} />}
      {type === 1 && <dodecahedronGeometry args={[1, 0]} />}
      {type === 2 && <icosahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial color={color} transparent opacity={0.6} roughness={0.2} metalness={0.8} />
    </mesh>
  )
}

function GradientPlane() {
  return (
    <mesh position={[0, 0, -15]} rotation={[0, 0, 0]}>
      <planeGeometry args={[50, 30]} />
      <meshBasicMaterial color="#020617" transparent opacity={0.9} />
    </mesh>
  )
}

export function ThreeDHeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          background:
            "radial-gradient(circle at top, #0b1120 0%, #020617 45%, #000000 100%)",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#0ea5a5" />
        <GradientPlane />
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
