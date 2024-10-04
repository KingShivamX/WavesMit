import React from "react"

const Home = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
            <video
                autoPlay
                muted
                loop
                src="BlackHole.webm"
                type="video/webm"
                className="rotate-180 z-0 absolute top-[-5rem] left-0 right-0 w-full h-full object-cover"
            ></video>

            <section className="home flex items-center justify-center fixed inset-0">
                <div className="welcome-section text-center text-white p-24">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to Waves
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Home
