import React from "react"

const contacts = [
    { name: "Om", img: "/contacts/om.jpg" },
    { name: "Vaishnavi", img: "/contacts/Vaishnavi .jpg" },
    { name: "Neha", img: "/contacts/Neha.jpg" },
]

const Contacts = () => (
    <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                Contacts
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {contacts.map((contact) => (
                    <div
                        key={contact.name}
                        className="flex flex-col items-center bg-[#181828]/80 rounded-2xl shadow-lg p-6 mb-4"
                    >
                        <img
                            src={contact.img}
                            alt={contact.name}
                            className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-purple-500 mb-4 bg-white"
                        />
                        <span className="text-lg font-semibold text-white">
                            {contact.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Contacts
