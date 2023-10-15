import React, { Suspense } from 'react';
import './styles/App.css';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import Dusts from './components/Dusts';
import Earth from './components/Earth';
import Loader from './components/Loader';
import { getPublicPath } from './helpers'

function App() {
  return (
    <main className='relative w-full h-screen bg-gray-900'>
      <section className='absolute text-white left-20 top-20'>
        <h1 className='text-5xl text-yellow-600 font-medium scale-y-150'>Welcome</h1>
        <span className='inline-block pl-2 pt-2 text-2xl w-content'>
          to my World
        </span>
        <div className='ml-2 mt-1 h-[.5px] bg-yellow-600 w-[130px]' />
      </section>
      <h1 className='absolute text-sm text-white bottom-1 right-2'>made with Three.js</h1>
      <Canvas camera={{ position: [0, 0, 1] }} shadows>
        <Suspense fallback=''>
          <Earth
            position={[.5, .1, -.3]}
            rotation={[.4, 0, 0]}
            size={.25}
            rSpeed={0.0015}
          />
          <Loader
            url={getPublicPath('/assets/models/laptop.glb')}
            position={[-.15, .05, .6]}
            rotation={[Math.PI / 8, Math.PI / 12, Math.PI / 12]}
            scale={[.003, .003, .003]}
          />
          <Loader
            url={getPublicPath('/assets/models/myself.glb')}
            position={[-.1, -.1, .7]}
            rotation={[0, 3.7, 0]}
            scale={[.1, .1, .1]}
          />
        </Suspense>
        <pointLight position={[5, 3, 5]} intensity={1.5} />
        <Stars radius={2} depth={0} count={1000} factor={.15} saturation={1} fade speed={2} />
        <Dusts />
        <Html position={[0, 0, 0]} transform>
          {/* <div className='bg-red-200 w-96'>
            h
          </div> */}
        </Html>
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </main>
  );
}

export default App;
