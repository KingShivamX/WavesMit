const Events = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Our Events
                </h1>

                {/* Upcoming Events Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Upcoming Events
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 hover:translate-y-[-4px]">
                            <div className="text-purple-400 mb-2">
                                April 15, 2069
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Science Symposium 2069
                            </h3>
                            <p className="text-purple-100/90">
                                Annual gathering of researchers and students to
                                showcase innovative projects and research work
                                with Albert Einstein. (sample text)
                            </p>
                        </div>
                        {/* Add more event cards as needed */}
                    </div>
                </section>

                {/* Past Events Section */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Past Events
                    </h2>

                    {/* HC Verma Talk Event - Now First */}
                    <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                            Invited Talk by Padmashree Prof. H C Verma on
                            &quot;Importance of Science&quot;
                        </h3>

                        <img
                            src="/events/IMG_3389.JPG"
                            alt="Professor HC Verma delivering talk on Importance of Science"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
                            style={{ objectPosition: "center" }}
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Date & Venue
                                    </h4>
                                    <p className="text-purple-100/90">
                                        February 4, 2023
                                    </p>
                                    <p className="text-purple-100/90">
                                        MIT Academy of Engineering, Alandi, Pune
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Distinguished Speaker
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Padmashree Professor H C Verma
                                    </p>
                                    <p className="text-purple-100/90 text-sm italic">
                                        (&quot;God of Physics&quot;)
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Participation
                                    </h4>
                                    <p className="text-purple-100/90">
                                        More than 200 students from different
                                        colleges and schools
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Special Note
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Professor Verma inaugurated
                                        &quot;Waves&quot; - a platform to
                                        explore the rhythm of life and living.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Key Highlights
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Discussion on current and future
                                            developments in the field of science
                                        </li>
                                        <li>
                                            Interactive session with students
                                            and faculty
                                        </li>
                                        <li>
                                            Insights on the temporary nature of
                                            educational &quot;trends&quot;
                                        </li>
                                        <li>
                                            Emphasis on following one&apos;s
                                            interests with patience and
                                            dedication
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Impact
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Professor Verma&apos;s words acted as a
                                        shooting star for young minds, opening a
                                        wide plethora of ideas, concepts, and
                                        understanding of the world of science.
                                        Students gained valuable insights and
                                        learning experiences that will sustain
                                        for the rest of their lives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Telescope Making Workshop */}
                    <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                            Telescope Making Workshop
                        </h3>

                        <img
                            src="/events/IMG_9495.JPG"
                            alt="Telescope Making Workshop participants"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
                            style={{ objectPosition: "center" }}
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Date & Venue
                                    </h4>
                                    <p className="text-purple-100/90">
                                        November 4, 2023
                                    </p>
                                    <p className="text-purple-100/90">
                                        MIT Academy of Engineering Alandi, Pune
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Collaboration
                                    </h4>
                                    <p className="text-purple-100/90">
                                        IUCAA (Inter-University Centre for
                                        Astronomy and Astrophysics)
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Resource Faculty
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Tushar Purohit and Rupesh Labade
                                        (Science Educators, IUCAA)
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Participation
                                    </h4>
                                    <p className="text-purple-100/90">
                                        60 B.Tech students
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Objectives
                                    </h4>
                                    <p className="text-purple-100/90">
                                        To introduce participants to the world
                                        of astronomy and provide hands-on
                                        experience in making their own
                                        telescope. The event aimed to empower
                                        participants with the knowledge and
                                        skills to build a basic telescope,
                                        fostering a deeper understanding and
                                        appreciation of celestial observations.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Outcomes
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Participants learned about various
                                            telescope designs, including
                                            refracting and reflecting telescopes
                                        </li>
                                        <li>
                                            Hands-on session where participants
                                            built their telescopes under expert
                                            guidance
                                        </li>
                                        <li>
                                            Learning techniques for celestial
                                            observation
                                        </li>
                                        <li>
                                            Practical sky-watching session
                                            resulting in observation of Jupiter
                                            and its moons
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SCICON 2024 Social Outreach */}
                    <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                            Jagriti Blind School (Social Outreach)
                        </h3>

                        <img
                            src="/events/IMG-20240202-WA0011.jpg"
                            alt="SCICON 2024 participants with certificates"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
                            style={{ objectPosition: "center" }}
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Date & Venue
                                    </h4>
                                    <p className="text-purple-100/90">
                                        January 29 - February 2, 2024
                                    </p>
                                    <p className="text-purple-100/90">
                                        NFBM Jagruti&apos;s Blind School for
                                        Girls
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Participation
                                    </h4>
                                    <p className="text-purple-100/90">
                                        40 students (4th Grade to 9th Grade)
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Event Scale
                                    </h4>
                                    <p className="text-purple-100/90">
                                        300+ teams with 600+ students
                                        participated across different categories
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Categories
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-1">
                                        <li>Everyday Science</li>
                                        <li>Ancient Science</li>
                                        <li>Future Science</li>
                                        <li>Science Photography</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        About the Event
                                    </h4>
                                    <p className="text-purple-100/90">
                                        SciCon was organized by the School of
                                        Humanities and Engineering Sciences, MIT
                                        Academy of Engineering, to commemorate
                                        National Science Day in honor of Sir C V
                                        Ramans discovery of the Raman Effect.
                                        The event evolved into a state-level
                                        inter-institutional
                                        competition-cum-exhibition featuring
                                        working models, still models, and
                                        posters.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Special Initiative
                                    </h4>
                                    <p className="text-purple-100/90">
                                        The SCICON team conducted a week-long
                                        training program at NFBM Jagruti&apos;s
                                        Blind School, helping students develop
                                        and explain 5 working models for the
                                        competition. This initiative reflects
                                        the teams commitment to creating an
                                        inclusive platform for students from all
                                        backgrounds to participate in scientific
                                        exploration.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Outcomes
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Successfully developed 5 working models
                                        for the competition, demonstrating the
                                        effectiveness of inclusive science
                                        education and hands-on learning
                                        approaches.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SCICON 2024 Main Event */}
                    <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                            SCICON 2024 - Annual Science Contest
                        </h3>

                        <img
                            src="/events/IMG_1878.JPG"
                            alt="SCICON 2024 student presentations"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
                            style={{ objectPosition: "center" }}
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Date & Venue
                                    </h4>
                                    <p className="text-purple-100/90">
                                        February 3, 2024
                                    </p>
                                    <p className="text-purple-100/90">
                                        MIT Academy of Engineering, Alandi, Pune
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Event Scale
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Inter-institutional competition with
                                        300+ teams and 600+ registrations
                                    </p>
                                    <p className="text-purple-100/90">
                                        Students from 1st to 11th grade
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Objectives
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Provide a platform for students to
                                            showcase scientific ideas and
                                            innovations
                                        </li>
                                        <li>
                                            Encourage practical application of
                                            knowledge in real-world situations
                                        </li>
                                        <li>
                                            Promote science education among
                                            diverse student backgrounds
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Key Achievements
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Participation from prestigious
                                            schools, Navodaya schools, and NFBM
                                            Jagruti&apos;s blind school
                                        </li>
                                        <li>
                                            Successful orientation sessions for
                                            project themes and categories
                                        </li>
                                        <li>
                                            Increased participation from
                                            underprivileged backgrounds
                                        </li>
                                        <li>
                                            Diverse scientific applications
                                            through presentations and models
                                        </li>
                                        <li>
                                            Evaluation by judges from
                                            prestigious institutions
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Recognition
                                    </h4>
                                    <p className="text-purple-100/90">
                                        All participants received participation
                                        certificates. Top three presentations in
                                        each category were awarded cash prizes,
                                        trophies, and certificates.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Impact
                                    </h4>
                                    <p className="text-purple-100/90">
                                        The event&apos;s success and
                                        enthusiastic participation has
                                        established SCICON as an annual platform
                                        for fostering scientific innovation and
                                        inclusive education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Invited Talk Event */}
                    <div className="bg-[#0300142f] backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-[#2A0E61]/50 hover:shadow-[#2A0E61]/70 transition-all duration-300 mb-12">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                            Invited Talk on "Importance of Experiments in
                            Learning Physics"
                        </h3>

                        <img
                            src="/events/IMG_image.png"
                            alt="Padma Shri Arvind Gupta demonstrating physics experiments"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-xl mb-6"
                            style={{ objectPosition: "center" }}
                        />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Date & Venue
                                    </h4>
                                    <p className="text-purple-100/90">
                                        December 3, 2024
                                    </p>
                                    <p className="text-purple-100/90">
                                        D011, MIT Academy of Engineering,
                                        Alandi, Pune
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Resource Faculty
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Padma Shri Arvind Gupta
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Event Details
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>Inter-Institutional Level Event</li>
                                        <li>240 Participants</li>
                                        <li>Coordinated by Puja Verma</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Trigger Points
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Inclination of students towards
                                            learning with fun
                                        </li>
                                        <li>
                                            Foster deeper interest in practical,
                                            experiential learning over
                                            theoretical approaches
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Objectives
                                    </h4>
                                    <ul className="text-purple-100/90 list-disc pl-4 space-y-2">
                                        <li>
                                            Make science education inclusive and
                                            engaging
                                        </li>
                                        <li>
                                            Teach creative problem-solving
                                            techniques and eco-conscious
                                            practices
                                        </li>
                                        <li>
                                            Inspire educators and students,
                                            making science accessible, fun, and
                                            meaningful
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-purple-400 font-semibold">
                                        Outcomes
                                    </h4>
                                    <p className="text-purple-100/90">
                                        Arvind Gupta, renowned for his
                                        initiative &quot;Toys from Trash,&quot;
                                        demonstrated innovative methods to teach
                                        scientific principles using toys crafted
                                        from everyday waste. Through simple yet
                                        impactful experiments, he elucidated
                                        fundamental concepts of physics,
                                        emphasizing hands-on learning as a
                                        powerful tool to ignite curiosity and
                                        understanding among students.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Events
