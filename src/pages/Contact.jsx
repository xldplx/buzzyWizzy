import { memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '/assets/bw_logo.png';
import logoText from '/assets/bw_logotext.png';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCard = memo(({ icon: Icon, title, children, gradientClass }) => (
    <div className="bg-zinc-900/50 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <div className="relative z-10">
            <Icon className="text-4xl text-white mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{title}</h2>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent w-full mb-6"></div>
            {children}
        </div>
    </div>
));

const Contact = memo(() => {
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
                        <HiOutlineSparkles className="text-4xl text-white mx-auto mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hover:tracking-wider transition-all duration-300">
                            Contact Us
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Get in touch with our team
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        <ContactCard 
                            icon={FaEnvelope}
                            title="Email Us"
                            gradientClass="from-purple-500/10 to-blue-500/10"
                        >
                            <p className="text-zinc-400 text-lg text-center">
                                Contact form coming soon.
                                <br />
                                We're setting up our communication channels.
                            </p>
                        </ContactCard>

                        <ContactCard 
                            icon={FaMapMarkerAlt}
                            title="Location"
                            gradientClass="from-orange-500/10 to-red-500/10"
                        >
                            <p className="text-zinc-400 text-lg text-center">
                                Jakarta, Indonesia
                                <br />
                                More details coming soon.
                            </p>
                        </ContactCard>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
});

ContactCard.displayName = 'ContactCard';
Contact.displayName = 'Contact';

export default Contact; 