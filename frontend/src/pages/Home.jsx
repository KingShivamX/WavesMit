import { useEffect, useRef } from "react"

const Home = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error)
            })
        }
    }, [])

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
                className="fixed -top-[5rem] md:-top-[6.3rem] left-0 w-full h-full object-cover rotate-180 z-0"
                style={{ height: "100vh" }}
            >
                <source src="/BlackHole.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="welcome-section text-center text-white p-6 md:p-24">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        Welcome to Waves
                    </h1>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">
                        MIT AoE
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Home
