import { IoMenu } from "react-icons/io5"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Links = [
    { name: "About", link: "/about" },
    { name: "Vision", link: "/vision" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <div className="w-screen h-[80px] md:h-[90px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
            <div className="max-w-[2000px] mx-auto h-full flex flex-row items-center justify-between px-4 md:px-20 lg:px-24">
                <Link
                    className="text-white text-2xl md:text-4xl font-semibold hover:text-purple-400 transition-colors"
                    to={"/"}
                >
                    Waves
                </Link>

                <div className="hidden sm:flex items-center gap-6 md:gap-8 ml-auto">
                    {Links.map((link) => (
                        <Link
                            className={`text-white font-medium text-base md:text-lg px-6 py-3 rounded-full 
                                     transition-all duration-200 ease-in-out
                                     hover:bg-[#2A0E61]/50 hover:shadow-lg hover:shadow-[#2A0E61]/50
                                     ${
                                         location.pathname === link.link
                                             ? "bg-[#2A0E61]/50 shadow-lg shadow-[#2A0E61]/50"
                                             : "bg-[#0300142f]"
                                     }`}
                            to={link.link}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="sm:hidden">
                    <IoMenu
                        className="text-white text-3xl cursor-pointer hover:text-purple-400 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                {isOpen && (
                    <div className="absolute top-[80px] md:top-[90px] left-0 w-full bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-40">
                        {Links.map((link) => (
                            <Link
                                className={`block text-white font-medium text-base py-3 px-6
                                         transition-all duration-200 ease-in-out
                                         hover:bg-[#2A0E61]/50
                                         ${
                                             location.pathname === link.link
                                                 ? "bg-[#2A0E61]/50"
                                                 : "bg-transparent"
                                         }`}
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
