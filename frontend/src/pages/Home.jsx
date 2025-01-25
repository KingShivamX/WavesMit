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

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="welcome-section text-center text-white p-6 md:p-16 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 tracking-tight">
                        Welcome to Waves
                    </h1>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 tracking-wide">
                        MIT AoE
                    </h2>

                    <div className="space-y-10">
                        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
                            A transformative initiative by MIT Academy of
                            Engineering dedicated to fostering scientific
                            thinking, social responsibility, and holistic
                            growth.
                        </p>

                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-purple-200/90 font-light">
                            We create opportunities for students to discover
                            their potential, inspire others, and work on
                            impactful projects that bridge the gap between
                            education and societal needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
