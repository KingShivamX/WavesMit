import { useEffect, useRef, useState } from "react"

const Home = () => {
    const videoRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener("loadeddata", () => {
                setIsLoading(false)
            })

            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error)
                setIsLoading(false)
            })
        }
    }, [])

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040015]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
                preload="auto"
                className={`fixed -top-[5rem] md:-top-[3.6rem] left-0 w-full h-full object-cover rotate-180 z-0 transition-opacity duration-500 ${
                    isLoading ? "opacity-0" : "opacity-100"
                }`}
                style={{ height: "100vh" }}
            >
                <source src="/assets/BlackHole.mp4" type="video/mp4" />
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
