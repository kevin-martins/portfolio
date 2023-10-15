import { useTexture } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { getPublicPath } from '../helpers';

const Atmosphere = ({ size, rSpeed, ...props }) => {
  const rotation = useRef()
  const cloudTexture = useTexture({
    map: getPublicPath('/assets/earth/Cloud.png'),
  })
  cloudTexture.transparent = true
  useFrame(() => {
    rotation.current.rotation.y += rSpeed * 1.5
  })
  return (
    <>
      <mesh {...props} ref={rotation} >
        <sphereGeometry args={[size + .01, 64, 64]} />
        <meshPhongMaterial {...cloudTexture} />
      </mesh>
    </>
  )
}

export const Earth = ({ size = 1, bump = 1, rSpeed = .001, ...props }) => {
  const rotation = useRef()
  const groundTextures = useTexture({
    map: getPublicPath('/assets/earth/Color.jpg'),
    bumpMap: getPublicPath('/assets/earth/Displacement.jpg'),
  })
  groundTextures.bumpScale = bump;
  useFrame(() => {
    rotation.current.rotation.y += rSpeed;
  })
  return (
    <>
      <mesh {...props} ref={rotation}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial {...groundTextures} />
      </mesh>
      <Atmosphere size={size} rSpeed={rSpeed} {...props} />
    </>
  )
}

export default Earth
