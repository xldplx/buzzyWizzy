import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '/assets/bw_logo.png';
import logoText from '/assets/bw_logotext.png';
import { HiOutlineSparkles } from 'react-icons/hi';

export default function About() {
    return (
        <>
            <Navbar 
                logo={logo}
                logoText={logoText}
            />
            <div className="py-40 min-h-screen bg-black px-4 font-geist">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black -z-10"></div>
                        <HiOutlineSparkles className="text-4xl text-white mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hover:tracking-wider transition-all duration-300">
                            About Us
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Creating innovative gaming experiences
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="grid gap-12 mb-32">
                        <div className="bg-zinc-900/50 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Our Story</h2>
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow mx-8"></div>
                                </div>
                                <p className="text-zinc-400 text-lg">
                                    Our story is currently being written.
                                    <br /><br />
                                    We're working hard to bring you the complete story of Buzzy Wizzy.
                                    Check back soon for updates.
                                </p>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow mx-8"></div>
                                </div>
                                <p className="text-zinc-400 text-lg">
                                    We are currently crafting our mission statement.
                                    <br /><br />
                                    Stay tuned as we define our vision for the future of gaming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 