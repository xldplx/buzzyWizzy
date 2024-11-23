import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-zinc-900/50 border-t border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
            
            <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
                <div className="flex flex-col items-center space-y-8">
                    {/* Logo Section */}
                    <Link to="/" className="group">
                        <h2 className="text-2xl font-bold text-white hover:tracking-wider transition-all duration-300">
                            BUZZY WIZZY
                        </h2>
                    </Link>

                    {/* Navigation */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/games" className="hover:text-white transition-colors">Games</Link>
                        <Link to="/about" className="hover:text-white transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a href="#" className="group">
                            <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-zinc-700 transition-colors">
                                <FaTwitter className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                        <a href="#" className="group">
                            <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-zinc-700 transition-colors">
                                <FaDiscord className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                        <a href="#" className="group">
                            <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-zinc-700 transition-colors">
                                <FaGithub className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

                    {/* Copyright */}
                    <p className="text-zinc-400 text-sm">
                        All rights reserved. Buzzy Wizzy 2024.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        </footer>
    );
} 