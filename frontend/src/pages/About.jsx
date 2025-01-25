const About = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    About MIT AoE Waves
                </h1>

                <div className="space-y-8">
                    <section className="bg-[#0300142f] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Who We Are
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed font-normal text-purple-100">
                            MIT AoE Waves is a pioneering science organization
                            dedicated to pushing the boundaries of scientific
                            exploration and innovation. Founded by passionate
                            researchers and students, we strive to create a
                            collaborative environment where cutting-edge ideas
                            meet practical implementation.
                        </p>
                    </section>

                    <section className="bg-[#0300142f] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Aims
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed font-normal text-purple-100">
                            We are committed to fostering scientific research,
                            promoting STEM education, and building a community
                            of innovative thinkers. Through our various
                            initiatives and projects, we aim to make complex
                            scientific concepts accessible to everyone.
                        </p>
                    </section>

                    <section className="bg-[#0300142f] backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            What We Do
                        </h2>
                        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-3 text-purple-100 font-normal">
                            <li>Conduct cutting-edge research projects</li>
                            <li>Organize workshops and seminars</li>
                            <li>Collaborate with industry experts</li>
                            <li>Mentor aspiring scientists</li>
                            <li>Host scientific competitions and events</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
