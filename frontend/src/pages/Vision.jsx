const Vision = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-white">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    Vision & Mission
                </h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <section className="bg-[#181828]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-6 flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                            Vision
                        </h2>
                        <div className="flex-1 p-4 rounded-xl">
                            <p className="text-base md:text-lg text-white/90">
                                To establish Waves as a long-lasting,
                                transformative initiative that nurtures
                                scientific thinking, social responsibility, and
                                holistic growth, empowering individuals to
                                explore the rhythm of life and living while
                                making meaningful contributions to the world.
                            </p>
                        </div>
                    </section>
                    <section className="bg-[#181828]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-6 flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                            Mission
                        </h2>
                        <div className="flex-1 p-4 rounded-xl">
                            <p className="text-base md:text-lg text-white/90">
                                To cultivate a vibrant and inclusive platform
                                where pupils can explore their potential,
                                inspire others, and work on impactful projects
                                that bridge the gap between education and
                                societal needs, thereby contributing to a
                                brighter and more equitable future.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Vision
