import { IoMenu } from "react-icons/io5"

const links = [
    { name: "About", link: "/about" },
    { name: "Vision", link: "/vision" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
]

const Navbar = () => {
    return (
        <div className="w-screen h-[73px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between">
                <div className="text-white text-[4vh] font-semibold">Waves</div>
            </div>
        </div>
    )
}

export default Navbar
