import { HiOutlineSparkles } from 'react-icons/hi';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import logo from '../assets/bw_logo.png';
import logoText from '../assets/bw_logotext.png';

export default function Home() {
    return (
        <>
            <Navbar 
                logo={logo}
                logoText={logoText}
            />

            <main className="bg-black min-h-screen select-none font-geist">
                {/* Hero Section */}
                <section className="pt-40 pb-32 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0"></div>
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="mb-8">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
                                Welcome to the Future of Gaming
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                            Make the Impossible
                            <span className="block mt-2 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                                be Possible
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-light">
                            Pushing the boundaries of gaming innovation, one pixel at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white hover:bg-zinc-100 text-black px-8 py-4 rounded-full font-medium transition-colors text-lg w-full sm:w-auto">
                                Explore Our Universe
                            </button>
                            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg w-full sm:w-auto">
                                View Our Games
                            </button>
                        </div>
                    </div>
                </section>

                {/* Featured Games Section */}
                <section className="py-32 px-4 bg-zinc-900">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-16 text-center">Featured Games</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            <GameCard 
                                title="Renara" 
                                description="This is the game description. Will edit this later."
                            />
                            <GameCard 
                                title="Riverside Ranch" 
                                description="This is the game description. Will edit this later."
                            />
                            <GameCard 
                                title="Desa Harapan" 
                                description="This is the game description. Will edit this later."
                            />
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 px-4 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { role: 'Founder', name: 'Guido Sijabat' },
                                { role: 'Co-Founder', name: 'Augusto Pratama (Harvey)' },
                                { role: 'Operational Manager', name: 'Muhammad Firman Hidayat' },
                                { role: 'Marketing Manager', name: 'Amelya Enjelita' },
                                { role: 'Secretary', name: 'Violetta Scarlet Adeline Roeroe, Abigail Larasati' },
                                { role: 'Treasurer', name: 'Rachel Syafelan Simbolon' },
                                { role: 'Programming Lead', name: 'Alden Sayidina Radjab (Me lol)' },
                                { role: 'Animation Lead', name: 'Aditya Pamungkas, Hardin Irfan' },
                                { role: 'Game Development Lead', name: 'Bara Nur Imaduddin' }
                            ].map((member, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl bg-zinc-900 p-6 hover:bg-zinc-800 transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="w-24 h-24 rounded-full bg-zinc-800 mx-auto mb-4 overflow-hidden">
                                            <div className="w-full h-full bg-zinc-700"></div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                                        <p className="text-zinc-400 text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}