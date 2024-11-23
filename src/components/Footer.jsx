import { memo } from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLink = memo(({ href, icon: Icon }) => (
    <a href={href} className="group">
        <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-zinc-700 transition-colors">
            <Icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
        </div>
    </a>
));

const NavLink = memo(({ to, children }) => (
    <Link 
        to={to} 
        className="hover:text-white transition-colors"
    >
        {children}
    </Link>
));

const Footer = memo(() => {
    const socialLinks = [
        { href: "#", icon: FaTwitter },
        { href: "#", icon: FaDiscord },
        { href: "#", icon: FaGithub }
    ];

    const navLinks = [
        { to: "/", text: "Home" },
        { to: "/games", text: "Games" },
        { to: "/about", text: "About" },
        { to: "/contact", text: "Contact" }
    ];

    return (
        <footer className="bg-zinc-900/50 border-t border-zinc-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
            
            <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
                <div className="flex flex-col items-center space-y-8">
                    <Link to="/" className="group">
                        <h2 className="text-2xl font-bold text-white hover:tracking-wider transition-all duration-300">
                            BUZZY WIZZY
                        </h2>
                    </Link>

                    <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} to={link.to}>{link.text}</NavLink>
                        ))}
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <SocialLink key={index} href={link.href} icon={link.icon} />
                        ))}
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

                    <p className="text-zinc-400 text-sm">
                        All rights reserved. Buzzy Wizzy 2024.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        </footer>
    );
});

SocialLink.displayName = 'SocialLink';
NavLink.displayName = 'NavLink';
Footer.displayName = 'Footer';

export default Footer; 