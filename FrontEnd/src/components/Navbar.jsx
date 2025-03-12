import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[10vh] bg-blue-950 flex justify-between items-center px-6 md:px-12 relative">
            {/* Logo and Title */}
            <div className="flex items-center gap-2 text-white">
                <MdAgriculture className="text-3xl text-green-600" />
                <h1 className="text-lg md:text-xl font-semibold">Agriculture Academy</h1>
            </div>

            {/* Desktop Explore Button */}
            <button className="hidden md:flex gap-2 border-b-2 border-blue-400 text-white hover:opacity-80 transition">
                <span className="text-lg md:text-xl font-medium">Explore</span>
                <span className="text-2xl font-medium">^</span>
            </button>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center border border-white px-3 py-1 rounded-md">
                <FaSearch className="text-white text-lg" />
                <input 
                    type="text" 
                    placeholder="Search here" 
                    className="bg-transparent text-white placeholder-gray-300 px-2 outline-none w-36 md:w-56 lg:w-72"
                />
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-4 text-white">
                <button className="hover:underline cursor-pointer">Login</button>
                <button className="bg-blue-400 cursor-pointer py-1 px-3 rounded-md hover:bg-blue-500 transition">
                    Sign Up
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-white text-2xl" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-[10vh] left-0 w-full bg-blue-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
                    <button className="text-lg hover:opacity-80">Explore</button>
                    <div className="flex items-center border border-white px-3 py-1 rounded-md">
                        <FaSearch className="text-white text-lg" />
                        <input 
                            type="text" 
                            placeholder="Search here" 
                            className="bg-transparent text-white placeholder-gray-300 px-2 outline-none w-48"
                        />
                    </div>
                    <button className="hover:underline">Login</button>
                    <button className="bg-blue-400 py-1 px-3 rounded-md hover:bg-blue-500 transition">
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
