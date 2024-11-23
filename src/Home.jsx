import { memo } from 'react';
import { HiOutlineSparkles } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import logo from '../assets/bw_logo.png';
import logoText from '../assets/bw_logotext.png';

// Memoize TeamMember component
const TeamMember = memo(({ member }) => (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900/50 backdrop-blur-sm p-8 hover:bg-zinc-800/50 transition-all duration-300">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-white via-zinc-500 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        <div className="relative z-10">
            <div className="w-24 h-24 rounded-full bg-zinc-800 mx-auto mb-6 overflow-hidden ring-2 ring-zinc-700 group-hover:ring-white transition-all duration-300">
                <div className="w-full h-full bg-zinc-700"></div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:tracking-wider transition-all duration-300">{member.name}</h3>
            <p className="text-zinc-400 text-center px-4 py-2 rounded-full bg-zinc-800/50 text-sm">{member.role}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/0 via-white/5 to-zinc-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
));

// Memoize GameCardWrapper component
const GameCardWrapper = memo(({ title, description, gradientClass }) => (
    <div className="group relative">
        <div className={`absolute inset-0 ${gradientClass} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <GameCard title={title} description={description} />
    </div>
));

const teamMembers = [
    { role: 'Founder', name: 'Guido Sijabat' },
    { role: 'Co-Founder', name: 'Augusto Pratama' },
    { role: 'Operational Manager', name: 'Muhammad Firman Hidayat' },
    { role: 'Marketing Manager', name: 'Amelya Enjelita' },
    { role: 'Secretary', name: 'Violetta Scarlet Adeline Roeroe' },
    { role: 'Secretary', name: 'Abigail Larasati' },
    { role: 'Treasurer', name: 'Rachel Syafelan Simbolon' },
    { role: 'Programming Lead', name: 'Alden Sayidina Radjab' },
    { role: 'Animation Lead', name: 'Aditya Pamungkas' },
    { role: 'Animation Lead', name: 'Hardin Irfan' },
    { role: 'Game Development Lead', name: 'Bara Nur Imaduddin' }
];

const Home = memo(() => {
    return (
        <>
            <Navbar logo={logo} logoText={logoText} />

            <main className="bg-black min-h-screen select-none font-geist">
                {/* Hero Section */}
                <section className="py-[15rem] px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0"></div>
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                            Make the Impossible
                            <span className="block mt-2 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                                be Possible
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto font-light">
                            Pushing the boundaries of gaming innovation, one pixel at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white hover:bg-zinc-100 text-black px-8 py-4 rounded-full font-medium transition-all text-lg w-full sm:w-auto hover:scale-105">
                                Explore Our Universe
                            </button>
                        </div>
                    </div>
                </section>

                {/* Featured Games Section */}
                <section className="py-32 px-4 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="text-4xl font-bold text-white">Featured Games</h2>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow mx-8"></div>
                            <IoGameController className="text-3xl text-white" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            <GameCardWrapper 
                                title="Renara"
                                description="This is the game description. Will edit this later."
                                gradientClass="bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                            />
                            <GameCardWrapper 
                                title="Riverside Ranch"
                                description="This is the game description. Will edit this later."
                                gradientClass="bg-gradient-to-r from-orange-500/10 to-red-500/10"
                            />
                            <GameCardWrapper 
                                title="Desa Harapan"
                                description="This is the game description. Will edit this later."
                                gradientClass="bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                            />
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 px-4 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="text-4xl font-bold text-white">Our Team</h2>
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent flex-grow mx-8"></div>
                            <FaUsers className="text-3xl text-white" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
});

TeamMember.displayName = 'TeamMember';
GameCardWrapper.displayName = 'GameCardWrapper';
Home.displayName = 'Home';

export default Home;