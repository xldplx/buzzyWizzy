import { useState, memo } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const NavLink = memo(({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
        <Link 
            to={to} 
            className={`${isActive ? 'text-white' : 'text-zinc-400'} hover:text-white transition-colors relative group px-4 py-3`}
        >
            <span>{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
        </Link>
    );
});

const Navbar = memo(({ logo, logoText }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 items-center h-24">
                    {/* Left - Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="block p-2">
                            <img 
                                src={logo} 
                                alt="Buzzy Wizzy Logo" 
                                className="h-14 w-auto rounded-lg hover:scale-105 transition-transform duration-200"
                                loading="eager"
                            />
                        </Link>
                    </div>

                    {/* Center - Logo Text */}
                    <div className="flex justify-center items-center">
                        <Link to="/" className="block p-2">
                            <img 
                                src={logoText} 
                                alt="Buzzy Wizzy" 
                                className="h-16 w-auto rounded hover:scale-105 transition-transform duration-200"
                                loading="eager"
                            />
                        </Link>
                    </div>

                    {/* Right - Navigation */}
                    <div className="hidden md:flex items-center justify-end space-x-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/games">Games</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden justify-self-end p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md">
                    <div className="px-6 py-6 space-y-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/games">Games</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
});

NavLink.displayName = 'NavLink';
Navbar.displayName = 'Navbar';

export default Navbar; 