const About = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    About MIT AoE Waves
                </h1>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <section className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px]">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Who We Are
                        </h2>
                        <p className="text-xl leading-relaxed font-normal text-purple-100/90">
                            MIT AoE Waves is a pioneering science organization
                            dedicated to pushing the boundaries of scientific
                            exploration and innovation. Founded by passionate
                            researchers and students, we strive to create a
                            collaborative environment where cutting-edge ideas
                            meet practical implementation.
                        </p>
                    </section>

                    <section className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px]">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Aims
                        </h2>
                        <p className="text-xl leading-relaxed font-normal text-purple-100/90">
                            We are committed to fostering scientific research,
                            promoting STEM education, and building a community
                            of innovative thinkers. Through our various
                            initiatives and projects, we aim to make complex
                            scientific concepts accessible to everyone.
                        </p>
                    </section>

                    <section className="md:col-span-2 bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px]">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            What We Do
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-4 text-xl leading-relaxed text-purple-100/90 font-normal">
                            <li className="flex items-center space-x-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Conduct cutting-edge research projects</span>
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
