import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ logo, logoText }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActivePath = (path) => {
        return location.pathname === path ? 'text-white' : 'text-zinc-400';
    };

    return (
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-zinc-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-3 items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="Buzzy Wizzy Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    <div className="flex justify-center">   
                        <Link to="/">
                            <img src={logoText} alt="Buzzy Wizzy" className="h-14 w-auto" />
                        </Link>
                    </div>
                    <div className="flex justify-end">
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 font-geist">
                            <Link to="/" className={`${isActivePath('/')} hover:text-white transition-colors`}>Home</Link>
                            <Link to="/games" className={`${isActivePath('/games')} hover:text-white transition-colors`}>Games</Link>
                            <Link to="/about" className={`${isActivePath('/about')} hover:text-white transition-colors`}>About</Link>
                            <Link to="/contact" className={`${isActivePath('/contact')} hover:text-white transition-colors`}>Contact</Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-black/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 py-4 space-y-4 font-geist">
                    <Link to="/" className={`block ${isActivePath('/')} hover:text-white transition-colors py-2`}>Home</Link>
                    <Link to="/games" className={`block ${isActivePath('/games')} hover:text-white transition-colors py-2`}>Games</Link>
                    <Link to="/about" className={`block ${isActivePath('/about')} hover:text-white transition-colors py-2`}>About</Link>
                    <Link to="/contact" className={`block ${isActivePath('/contact')} hover:text-white transition-colors py-2`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
} 