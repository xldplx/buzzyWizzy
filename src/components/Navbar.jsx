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
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-zinc-800 to-zinc-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 items-center h-24">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src={logo} alt="Buzzy Wizzy Logo" className="h-14 w-auto rounded-lg" />
                            </Link>
                        </div>
                        
                        <div className="flex justify-center">
                            <Link to="/">
                                <img src={logoText} alt="Buzzy Wizzy" className="h-16 w-auto rounded-lg" />
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center justify-end space-x-8">
                            <Link 
                                to="/" 
                                className={`${isActivePath('/')} hover:text-white transition-colors relative group px-3 py-2`}
                            >
                                <span>Home</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <Link 
                                to="/games" 
                                className={`${isActivePath('/games')} hover:text-white transition-colors relative group px-3 py-2`}
                            >
                                <span>Games</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <Link 
                                to="/about" 
                                className={`${isActivePath('/about')} hover:text-white transition-colors relative group px-3 py-2`}
                            >
                                <span>About</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`${isActivePath('/contact')} hover:text-white transition-colors relative group px-3 py-2`}
                            >
                                <span>Contact</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                        </div>

                        <button 
                            className="md:hidden justify-self-end text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-black/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 py-4 space-y-4">
                    <Link to="/" className={`block ${isActivePath('/')} hover:text-white transition-colors py-2`}>Home</Link>
                    <Link to="/games" className={`block ${isActivePath('/games')} hover:text-white transition-colors py-2`}>Games</Link>
                    <Link to="/about" className={`block ${isActivePath('/about')} hover:text-white transition-colors py-2`}>About</Link>
                    <Link to="/contact" className={`block ${isActivePath('/contact')} hover:text-white transition-colors py-2`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
} 