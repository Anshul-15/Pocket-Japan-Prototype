import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import JapanMap from '../components/japanmap'
import { Leva } from 'leva'
import { useControls } from 'leva'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'

const Hero = () => {
    const x = useControls('japanmap', {
        positionX: {
            value: -2.0,
            min: -10,
            max: 10,
        },
        positionY: {
            value: -0.2,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        scaleX: {
            value: 1.8, // Increase scale to make the map larger
            min: 1,
            max: 20,
        },
        scaleY: {
            value: 10, // Increase scale to make the map larger
            min: 1,
            max: 20,
        },
        scaleZ: {
            value: 10, // Increase scale to make the map larger
            min: 1,
            max: 20,
        },
        rotationX: {
            value: 0.6,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
    })

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi I am
                    <span className="waving-hand">✋</span>
                </p>
            </div> */}

            <div className="w-full h-full inset-0 absolute">
                <Leva />
                <Canvas
                    className="w-full h-full"
                    style={{
                        position: 'absolute', // Make sure canvas stays in place
                        top: 0,
                        left: 0,
                        zIndex: -1, // Ensure it stays behind other content
                    }}
                >
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <JapanMap
                            position={[x.positionX, x.positionY, x.positionZ]}
                            rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            scale={[x.scaleX, x.scaleX, x.scaleX]}
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero
