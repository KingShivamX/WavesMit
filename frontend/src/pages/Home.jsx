import React from "react"

const Home = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015]">
            <video
                autoPlay
                muted
                loop
                src="/blackhole.webm"
                type="video/webm"
                className="rotate-180 z-0 absolute top-[-325px] left-0 w-full h-full object-cover"
            ></video>
        </div>
    )
}

export default Home
