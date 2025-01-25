const Vision = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Vision & Mission
                </h1>

                <div className="space-y-8">
                    <section className="bg-[#0300142f] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Vision
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed font-normal text-purple-100">
                            To establish Waves as a long-lasting, transformative
                            initiative that nurtures scientific thinking, social
                            responsibility, and holistic growth, empowering
                            individuals to explore the rhythm of life and living
                            while making meaningful contributions to the world.
                        </p>
                    </section>

                    <section className="bg-[#0300142f] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Mission
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed font-normal text-purple-100">
                            To cultivate a vibrant and inclusive platform where
                            pupils can explore their potential, inspire others,
                            and work on impactful projects that bridge the gap
                            between education and societal needs, thereby
                            contributing to a brighter and more equitable
                            future.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Vision
