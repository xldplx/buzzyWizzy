import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
            <Navbar 
                logo="/assets/bw_logo.png"
                logoText="/assets/bw_logotext.png"
            />
            <div className="pt-32 min-h-screen bg-black px-4 font-geist">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 hover:tracking-wider transition-all duration-300">
                            About Us
                        </h1>
                        <div className="grid gap-8">
                            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Story</h2>
                                <p className="text-zinc-400 text-lg md:text-xl">
                                    Our story is currently being written.
                                    <br /><br />
                                    We're working hard to bring you the complete story of Buzzy Wizzy.
                                    Check back soon for updates.
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
                                <p className="text-zinc-400 text-lg md:text-xl">
                                    To create innovative and engaging gaming experiences that push the boundaries of what's possible.
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