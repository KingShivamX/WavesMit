const About = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-white">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    About MIT AoE Waves
                </h1>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <section className="bg-[#181828]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                            Who We Are
                        </h2>
                        <p className="text-base md:text-lg text-white/90">
                            MIT AoE Waves is a pioneering science organization
                            dedicated to pushing the boundaries of scientific
                            exploration and innovation. Founded by passionate
                            researchers and students, we strive to create a
                            collaborative environment where cutting-edge ideas
                            meet practical implementation.
                        </p>
                    </section>
                    <section className="bg-[#181828]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg mb-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                            Aims
                        </h2>
                        <p className="text-base md:text-lg text-white/90">
                            We are committed to fostering scientific research,
                            promoting STEM education, and building a community
                            of innovative thinkers. Through our various
                            initiatives and projects, we aim to make complex
                            scientific concepts accessible to everyone.
                        </p>
                    </section>
                    <section className="md:col-span-2 bg-[#181828]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                            What We Do
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4 text-base md:text-lg text-white/90 font-normal">
                            <li className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>
                                    Conduct cutting-edge research projects
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                <span>Organize workshops and seminars</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                <span>Collaborate with industry experts</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                <span>Mentor aspiring scientists</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
