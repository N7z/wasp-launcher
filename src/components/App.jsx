import React from 'react';
import Navbar from './Navbar.jsx';
import GameCard from './GameCard.jsx';

import placeholderFoto from '../assets/images/game3.jpg';

export default function App() {
    return (
        <div className="min-h-screen max-h-full bg-zinc-900">
            <Navbar />

            <p className="text-3xl font-semibold text-white px-8 mt-8">Catálogo de</p>
            <div className="grid grid-cols-5 overflow-x-auto gap-4 p-8">
                <GameCard image={placeholderFoto} alt="Game 1" />
                <GameCard image={placeholderFoto} alt="Game 2" />
                <GameCard image={placeholderFoto} alt="Game 3" />
                <GameCard image={placeholderFoto} alt="Game 4" />
                <GameCard image={placeholderFoto} alt="Game 5" />
            </div>
        </div>
    );
}
