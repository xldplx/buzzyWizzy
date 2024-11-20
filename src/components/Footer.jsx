import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex space-x-6">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <FaDiscord className="text-2xl" />
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <FaGithub className="text-2xl" />
                        </a>
                    </div>
                    <p className="text-zinc-400 text-center">All rights reserved. Buzzy Wizzy 2024.</p>
                </div>
            </div>
        </footer>
    );
} 