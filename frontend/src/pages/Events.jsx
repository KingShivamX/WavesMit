const pastEvents = [
    {
        title: 'Invited Talk by Padmashree Prof. H C Verma on "Importance of Science"',
        img: "/events/IMG_3389.webp",
        imgAlt: "Professor HC Verma delivering talk on Importance of Science",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "February 4, 2023",
                    "MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Distinguished Speaker",
                content: ["Padmashree Professor H C Verma", '"God of Physics"'],
            },
            {
                heading: "Participation",
                content: [
                    "More than 200 students from different colleges and schools",
                ],
            },
            {
                heading: "Special Note",
                content: [
                    'Professor Verma inaugurated "Waves" - a platform to explore the rhythm of life and living.',
                ],
            },
        ],
        highlights: [
            "Discussion on current and future developments in the field of science",
            "Interactive session with students and faculty",
            'Insights on the temporary nature of educational "trends"',
            "Emphasis on following one's interests with patience and dedication",
        ],
        impact: "Professor Verma's words acted as a shooting star for young minds, opening a wide plethora of ideas, concepts, and understanding of the world of science. Students gained valuable insights and learning experiences that will sustain for the rest of their lives.",
    },
    {
        title: "Telescope Making Workshop",
        img: "/events/IMG_9495.webp",
        imgAlt: "Telescope Making Workshop participants",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "November 4, 2023",
                    "MIT Academy of Engineering Alandi, Pune",
                ],
            },
            {
                heading: "Collaboration",
                content: [
                    "IUCAA (Inter-University Centre for Astronomy and Astrophysics)",
                ],
            },
            {
                heading: "Resource Faculty",
                content: [
                    "Tushar Purohit and Rupesh Labade (Science Educators, IUCAA)",
                ],
            },
            {
                heading: "Participation",
                content: ["60 B.Tech students"],
            },
        ],
        highlights: [
            "Participants learned about various telescope designs, including refracting and reflecting telescopes",
            "Hands-on session where participants built their telescopes under expert guidance",
            "Learning techniques for celestial observation",
            "Practical sky-watching session resulting in observation of Jupiter and its moons",
        ],
        impact: "To introduce participants to the world of astronomy and provide hands-on experience in making their own telescope. The event aimed to empower participants with the knowledge and skills to build a basic telescope, fostering a deeper understanding and appreciation of celestial observations.",
    },
    {
        title: "Jagriti Blind School (Social Outreach)",
        img: "/events/IMG-20240202-WA0011.webp",
        imgAlt: "SCICON 2024 participants with certificates",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "January 29 - February 2, 2024",
                    "NFBM Jagruti's Blind School for Girls",
                ],
            },
            {
                heading: "Participation",
                content: ["40 students (4th Grade to 9th Grade)"],
            },
            {
                heading: "Event Scale",
                content: [
                    "300+ teams with 600+ students participated across different categories",
                ],
            },
            {
                heading: "Categories",
                content: [
                    "Everyday Science",
                    "Ancient Science",
                    "Future Science",
                    "Science Photography",
                ],
            },
        ],
        highlights: [
            "SciCon was organized by the School of Humanities and Engineering Sciences, MIT Academy of Engineering, to commemorate National Science Day in honor of Sir C V Ramans discovery of the Raman Effect.",
            "The event evolved into a state-level inter-institutional competition-cum-exhibition featuring working models, still models, and posters.",
            "The SCICON team conducted a week-long training program at NFBM Jagruti's Blind School, helping students develop and explain 5 working models for the competition.",
            "This initiative reflects the teams commitment to creating an inclusive platform for students from all backgrounds to participate in scientific exploration.",
        ],
        impact: "Successfully developed 5 working models for the competition, demonstrating the effectiveness of inclusive science education and hands-on learning approaches.",
    },
    {
        title: "SCICON 2024 - Annual Science Contest",
        img: "/events/IMG_1878.webp",
        imgAlt: "SCICON 2024 student presentations",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "February 3, 2024",
                    "MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Event Scale",
                content: [
                    "Inter-institutional competition with 300+ teams and 600+ registrations",
                    "Students from 1st to 11th grade",
                ],
            },
            {
                heading: "Objectives",
                content: [
                    "Provide a platform for students to showcase scientific ideas and innovations",
                    "Encourage practical application of knowledge in real-world situations",
                    "Promote science education among diverse student backgrounds",
                ],
            },
        ],
        highlights: [
            "Participation from prestigious schools, Navodaya schools, and NFBM Jagruti's blind school",
            "Successful orientation sessions for project themes and categories",
            "Increased participation from underprivileged backgrounds",
            "Diverse scientific applications through presentations and models",
            "Evaluation by judges from prestigious institutions",
        ],
        impact: "All participants received participation certificates. Top three presentations in each category were awarded cash prizes, trophies, and certificates. The event's success and enthusiastic participation has established SCICON as an annual platform for fostering scientific innovation and inclusive education.",
    },
    {
        title: 'Invited Talk on "Importance of Experiments in Learning Physics"',
        img: "/events/IMG_image.webp",
        imgAlt: "Padma Shri Arvind Gupta demonstrating physics experiments",
        details: [
            {
                heading: "Date & Venue",
                content: [
                    "December 3, 2024",
                    "D011, MIT Academy of Engineering, Alandi, Pune",
                ],
            },
            {
                heading: "Resource Faculty",
                content: ["Padma Shri Arvind Gupta"],
            },
            {
                heading: "Event Details",
                content: [
                    "Inter-Institutional Level Event",
                    "240 Participants",
                    "Coordinated by Puja Verma",
                ],
            },
            {
                heading: "Trigger Points",
                content: [
                    "Inclination of students towards learning with fun",
                    "Foster deeper interest in practical, experiential learning over theoretical approaches",
                ],
            },
        ],
        highlights: [
            "Make science education inclusive and engaging",
            "Teach creative problem-solving techniques and eco-conscious practices",
            "Inspire educators and students, making science accessible, fun, and meaningful",
        ],
        impact: 'Arvind Gupta, renowned for his initiative "Toys from Trash," demonstrated innovative methods to teach scientific principles using toys crafted from everyday waste. Through simple yet impactful experiments, he elucidated fundamental concepts of physics, emphasizing hands-on learning as a powerful tool to ignite curiosity and understanding among students.',
    },
]

const Events = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-white">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                    Our Events
                </h1>
                {/* Upcoming Events Section */}
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                        Upcoming Events
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#181828]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                            <div className="text-purple-400 mb-2 text-base">
                                April 15, 2025
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                HC Verma Sir Talk
                            </h3>
                            <p className="text-white/90 text-lg md:text-xl">
                                HC Verma Sir will be talking about the
                                importance of science and how it can change the
                                world.
                            </p>
                        </div>
                        {/* Add more event cards as needed */}
                    </div>
                </section>
                {/* Past Events Section */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                        Past Events
                    </h2>
                    {/* Event Cards */}
                    {pastEvents.map((event, idx) => (
                        <div
                            key={idx}
                            className="bg-[#181828]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-10"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                {event.title}
                            </h3>
                            <img
                                src={event.img}
                                alt={event.imgAlt}
                                className="w-full h-[200px] md:h-[350px] object-cover rounded-xl mb-4"
                                style={{ objectPosition: "center" }}
                            />
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    {event.details.map((detail, i) => (
                                        <div key={i}>
                                            <h4 className="text-purple-400 font-semibold text-lg md:text-xl">
                                                {detail.heading}
                                            </h4>
                                            {detail.content.map((line, j) => (
                                                <p
                                                    key={j}
                                                    className="text-white/90 text-lg md:text-xl"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h4 className="text-purple-400 font-semibold text-lg md:text-xl">
                                            Key Highlights
                                        </h4>
                                        <ul className="text-white/90 list-disc pl-4 space-y-1 text-lg md:text-xl">
                                            {event.highlights.map((hl, k) => (
                                                <li key={k}>{hl}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-purple-400 font-semibold text-lg md:text-xl">
                                            Impact
                                        </h4>
                                        <p className="text-white/90 text-lg md:text-xl">
                                            {event.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Events
