export default function GameCard({ title, description }) {
    return (
        <div className="bg-black rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-zinc-800">
            <div className="h-64 bg-zinc-900"></div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-zinc-400 mb-4">{description}</p>
                <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
} 