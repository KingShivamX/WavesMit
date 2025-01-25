const Vision = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Vision & Mission
                </h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <section className="bg-[#0300142f] backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Vision
                        </h2>
                        <div className="flex-1 bg-gradient-to-b from-[#0300142f] to-transparent p-6 rounded-xl">
                            <p className="text-xl leading-relaxed font-normal text-purple-100/90">
                                To establish Waves as a long-lasting, transformative
                                initiative that nurtures scientific thinking, social
                                responsibility, and holistic growth, empowering
                                individuals to explore the rhythm of life and living
                                while making meaningful contributions to the world.
                            </p>
                        </div>
                    </section>

                    <section className="bg-[#0300142f] backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px] flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Mission
                        </h2>
                        <div className="flex-1 bg-gradient-to-b from-[#0300142f] to-transparent p-6 rounded-xl">
                            <p className="text-xl leading-relaxed font-normal text-purple-100/90">
                                To cultivate a vibrant and inclusive platform where
                                pupils can explore their potential, inspire others,
                                and work on impactful projects that bridge the gap
                                between education and societal needs, thereby
                                contributing to a brighter and more equitable
                                future.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Vision
