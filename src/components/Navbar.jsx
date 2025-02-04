import React from 'react';
import { Settings } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 text-2xl bg-zinc-800">
            <div className="flex items-center gap-8">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-16 w-auto"
                />

                <div className="text-zinc-200 hover:text-white cursor-pointer transition-all duration-200 font-bold hover:scale-110">
                    Discover
                </div>
                <div className="text-zinc-200 hover:text-white cursor-pointer transition-all duration-200 font-bold hover:scale-110">
                    Library
                </div>
            </div>
            <Settings className="text-zinc-200 hover:text-white cursor-pointer transition-all duration-200 mx-4 hover:scale-110" size={32} />
        </div>
    );
}
