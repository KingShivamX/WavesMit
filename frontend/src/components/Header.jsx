import { IoMenu } from "react-icons/io5"
import { useState } from "react"
import { Link } from "react-router-dom"

const Links = [
    { name: "About", link: "/about" },
    { name: "Vision", link: "/vision" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-screen h-[73px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between">
                <Link className="text-white text-[4vh] font-semibold" to={"/"}>
                    Waves
                </Link>
                <div>
                    {Links.map((link) => (
                        <Link
                            className=" hidden sm:inline text-white font-normal text-[2.5vh] mr-5 bg-[#0300142f] border-[#0300142f] border-2 px-4 py-2 rounded-full"
                            to={link.link}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="sm:hidden">
                    <IoMenu
                        className="sm:hidden text-white text-[4vh] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                {isOpen && (
                    <div
                        className={`absolute top-[73px] left-0 w-full bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-40 transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-screen" : "max-h-0"
                        } overflow-hidden`}
                    >
                        {Links.map((link) => (
                            <Link
                                className="block text-white font-normal text-[2.5vh] py-2 px-10 border-b border-[#0300142f] bg-[#0300142f]"
                                to={link.link}
                                key={link.name}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
