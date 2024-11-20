import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '/assets/bw_logo.png';
import logoText from '/assets/bw_logotext.png';

export default function Games() {
    return (
        <>
            <Navbar 
                logo={logo}
                logoText={logoText}
            />
            <div className="pt-32 min-h-screen bg-black px-4 font-geist">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 hover:tracking-wider transition-all duration-300">
                            Our Games
                        </h1>
                        <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 transform hover:-translate-y-1">
                            <p className="text-zinc-400 text-lg md:text-xl">
                                Game catalog coming soon.
                                <br /><br />
                                We're preparing something special for you.
                                Stay tuned for our upcoming releases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 