import { extend } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Loader = ({ url, ...props }) => {
  const levitate = useRef()
  const model = useGLTF(url)
  const [hovered, setHovered] = useState(false);

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'default'), [hovered])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    levitate.current.rotation.x = THREE.MathUtils.lerp(levitate.current.rotation.x, Math.cos(t) / 20.25, 0.1)
    // levitate.current.rotation.y = THREE.MathUtils.lerp(levitate.current.rotation.y, Math.sin(t) / 20, 0.1)
    levitate.current.rotation.z = THREE.MathUtils.lerp(levitate.current.rotation.z, Math.sin(t) / 15, 0.1)
    // levitate.current.position.y = THREE.MathUtils.lerp(levitate.current.position.y, (-2 + Math.sin(t)) / 20, 0.1)
  })
  // onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
  return (
    <mesh ref={levitate} onPointerOver={(e) => {setHovered(true)}}>
      <primitive object={model.scene} {...props} />
      <Environment preset='city' />
    </mesh>
  )
}

export default Loader
