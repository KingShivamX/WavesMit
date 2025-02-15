import { IoMenu } from "react-icons/io5"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Links = [
    { name: "About", link: "/about" },
    { name: "Vision", link: "/vision" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === "/"

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={`w-screen h-[80px] md:h-[90px] fixed top-0 left-0 right-0 
            ${
                scrolled
                    ? "shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]"
                    : "bg-transparent"
            } 
            backdrop-blur-md z-50 transition-all duration-300`}
        >
            <div className="max-w-[2000px] mx-auto h-full flex flex-row items-center justify-between px-4 md:px-20 lg:px-24">
                <Link
                    className="text-white text-2xl md:text-4xl font-semibold hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
                    to={"/"}
                >
                    Waves
                </Link>

                <div className="hidden sm:flex items-center gap-6 md:gap-8 ml-auto">
                    {Links.map((link) => (
                        <Link
                            className={`text-white font-medium text-base md:text-lg px-6 py-3 rounded-full 
                                     transition-all duration-300 ease-in-out
                                     hover:bg-[#2A0E61]/50 hover:shadow-lg hover:shadow-[#2A0E61]/50
                                     transform hover:scale-105
                                     ${
                                         location.pathname === link.link
                                             ? "bg-[#2A0E61]/20 shadow-lg shadow-[#2A0E61]/50"
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
                        className="text-white text-3xl cursor-pointer hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                {isOpen && (
                    <div
                        className={`absolute top-[80px] md:top-[90px] left-0 w-full 
                              ${
                                  isHomePage
                                      ? "bg-[#03001485]"
                                      : "bg-[#030014cc]"
                              }
                              backdrop-blur-lg 
                              shadow-[0_4px_30px_rgba(0,0,0,0.3)] 
                              border-t border-white/20
                              z-40
                              animate-fadeIn`}
                    >
                        {Links.map((link, index) => (
                            <Link
                                className={`block font-medium text-base py-4 px-6
                                         transition-all duration-300 ease-in-out
                                         ${
                                             index !== Links.length - 1
                                                 ? "border-b border-gray-400/20"
                                                 : ""
                                         }
                                         hover:pl-8
                                         ${
                                             isHomePage
                                                 ? "text-white hover:bg-[#2A0E61]/50"
                                                 : "text-white hover:bg-[#2A0E61]/30"
                                         }
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
