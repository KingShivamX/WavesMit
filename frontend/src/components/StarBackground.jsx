import React, { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

// Component to create the star background
const StarBackground = (props) => {
    const ref = useRef() // Reference to the Points component
    // Generate random points within a sphere
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    )

    // Rotate the points on each frame
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })

    return (
        // Group to apply initial rotation
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref} // Attach the ref to the Points component
                positions={sphere} // Set the positions of the points
                stride={3} // Number of elements per vertex
                frustumCulled // Enable frustum culling
                {...props} // Spread any additional props
            >
                <PointMaterial
                    transparent // Make the points transparent
                    color="$fff" // Set the color of the points
                    size={0.003} // Set the size of the points
                    sizeAttenuation={true} // Enable size attenuation
                    dethWrite={false} // Disable depth write
                />
            </Points>
        </group>
    )
}

// Component to render the star background within a canvas
const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            {/* Suspense to handle loading of the star background */}
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
            <Preload all /> {/* Preload all resources */}
        </Canvas>
    </div>
)

export default StarsCanvas
