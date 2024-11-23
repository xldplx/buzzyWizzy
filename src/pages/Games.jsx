import { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '/assets/bw_logo.png';
import logoText from '/assets/bw_logotext.png';
import GameCard from '../components/GameCard';

const GameCardWrapper = memo(({ title, description, gradientClass }) => (
    <div className="group relative">
        <div className={`absolute inset-0 ${gradientClass} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <GameCard title={title} description={description} />
    </div>
));

const Games = memo(() => {
    return (
        <>
            <Navbar 
                logo={logo}
                logoText={logoText}
            />
            <div className="py-40 min-h-screen bg-black px-4 font-geist">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black -z-10"></div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hover:tracking-wider transition-all duration-300">
                            Our Games
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Discover our latest releases and upcoming titles
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

                    <div className="bg-zinc-900/50 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-black/0 to-zinc-900/50 animate-pulse"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                More Games in Development
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8">
                                Our team is working on exciting new titles that will push the boundaries of gaming.
                            </p>
                            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all text-lg hover:scale-105">
                                Subscribe for Updates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
});

GameCardWrapper.displayName = 'GameCardWrapper';
Games.displayName = 'Games';

export default Games; 