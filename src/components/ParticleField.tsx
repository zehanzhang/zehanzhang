import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** 3D spatial grid with point cloud and bounding boxes */
function SpatialGrid() {
  const groupRef = useRef<THREE.Group>(null!)

  const gridGeometry = useMemo(() => {
    const points: number[] = []
    const size = 12
    const divisions = 16
    const step = size / divisions

    for (let i = -divisions / 2; i <= divisions / 2; i++) {
      points.push(-size / 2, 0, i * step, size / 2, 0, i * step)
      points.push(i * step, 0, -size / 2, i * step, 0, size / 2)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    return geo
  }, [])

  const pointCount = 600
  const [pointPositions, pointColors, velocities] = useMemo(() => {
    const pos = new Float32Array(pointCount * 3)
    const col = new Float32Array(pointCount * 3)
    const vel = new Float32Array(pointCount * 3)

    for (let i = 0; i < pointCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = Math.random() * 5 + 0.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14

      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003

      const t = pos[i * 3 + 1] / 5.5
      if (t < 0.5) {
        col[i * 3] = 0; col[i * 3 + 1] = 0.5 + t; col[i * 3 + 2] = 1
      } else {
        col[i * 3] = 0.49 * (t - 0.5) * 2
        col[i * 3 + 1] = 1 - (t - 0.5)
        col[i * 3 + 2] = 0.53 + 0.47 * (t - 0.5) * 2
      }
    }
    return [pos, col, vel]
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.03

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < pointCount; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]
      if (Math.abs(pos[i * 3]) > 7) velocities[i * 3] *= -1
      if (pos[i * 3 + 1] > 6 || pos[i * 3 + 1] < 0.3) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > 7) velocities[i * 3 + 2] *= -1
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={gridGeometry}>
        <lineBasicMaterial color="#00d4ff" opacity={0.06} transparent />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[pointColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* 3D bounding boxes (traditional cubes) */}
      {[
        { pos: [-2, 1, -1] as [number, number, number], scale: [1.5, 1.2, 2] as [number, number, number], color: '#00d4ff' },
        { pos: [3, 0.8, 2] as [number, number, number], scale: [2, 1, 1.2] as [number, number, number], color: '#7c3aed' },
        { pos: [-1, 1.5, 3] as [number, number, number], scale: [1, 2, 1] as [number, number, number], color: '#00ff88' },
      ].map((box, i) => (
        <mesh key={i} position={box.pos}>
          <boxGeometry args={box.scale} />
          <meshBasicMaterial color={box.color} wireframe transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 6, 10], fov: 55, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SpatialGrid />
      </Canvas>
    </div>
  )
}
