import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import Loader from '../Loader'

const Computer = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
   <mesh>
    <hemisphereLight intensity={0.15}
    groundColor="black" />
    <pointLight intensity={2}/>
    <ambientLight intensity={1}/>
    <primitive 
    object={computer.scene}
     scale={0.7}
     position= {[0,-2,-0.5]}
     rotation={[-0.01,-0.2,-0.1]}
     />
     
   </mesh>
  )
}

const ComputerCanvas = () => {
    return(
        <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20,2,5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />} >
                <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}

                 />
                 <Computer />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputerCanvas
