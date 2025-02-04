import React from 'react';
import { Settings } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-6 text-xl bg-zinc-950 text-white shadow-lg">
            <div className="flex items-center gap-10">
                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto"
                />

                {/* Navbar Links */}
                <div className="flex gap-12">
                    <div className="text-white hover:text-[#0057ff] cursor-pointer transition-all duration-200 font-bold hover:scale-110">
                        Catálogo
                    </div>
                    <div className="text-white hover:text-[#0057ff] cursor-pointer transition-all duration-200 font-bold hover:scale-110">
                        Meus Jogos
                    </div>
                </div>
            </div>

            {/* Settings Icon */}
            <Settings className="text-white hover:text-[#0057ff] cursor-pointer transition-all duration-200 hover:scale-110" size={32} />
        </div>
    );
}
