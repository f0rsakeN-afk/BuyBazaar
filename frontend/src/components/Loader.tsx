import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
    const [currentEmoji, setCurrentEmoji] = useState(0);
    const emojis = ['🍎', '🍊', '🍇', '🥕', '🥦', '🍓', '🍌', '🍍', '🥑', '🍆',
        '🍅', '🌽', '🥒', '🍉', '🥭', '🍐', '🍋', '🍈', '🍏', '🫐',
        '🥝', '🥔', '🧅', '🫑', '🥬'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentEmoji((prev) => (prev + 1) % emojis.length);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-green-50 z-50">
            <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl animate-bounce">🍎</span>
                <span className="text-5xl animate-bounce delay-100">🥕</span>
                <span className="text-5xl animate-bounce delay-200">🍇</span>
            </div>


            <div className="relative w-32 h-32">
                <div className="absolute top-0 left-0 w-full h-full border-8 border-green-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-full h-full border-t-8 border-green-500 rounded-full animate-spin-fast"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 flex items-center justify-center bg-white rounded-full shadow-inner">
                    <span className="text-4xl transition-opacity duration-300 ease-in-out">
                        {emojis[currentEmoji]}
                    </span>
                </div>
            </div>

            <h2 className="mt-8 text-3xl font-bold text-green-600 animate-pulse">
                BuyBazaar
            </h2>
            <p className="mt-2 text-green-500">Fresh produce loading...</p>
        </div>
    );
};

export default Loader;