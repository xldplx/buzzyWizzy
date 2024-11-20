import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
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
                            Contact Us
                        </h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1">
                                <FaEnvelope className="text-4xl text-white mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-4">Email Us</h2>
                                <p className="text-zinc-400 text-lg">
                                    Contact form coming soon.
                                    <br />
                                    We're setting up our communication channels.
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1">
                                <FaMapMarkerAlt className="text-4xl text-white mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
                                <p className="text-zinc-400 text-lg">
                                    Cikarang, Indonesia
                                    <br />
                                    More details coming soon.
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