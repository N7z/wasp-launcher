import React from 'react';

export default function GameCard({ image, alt }) {
    return (
        <div className="w-[14rem] h-[20rem] relative cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-105 hover:border-4 hover:border-[#0057ff] rounded-lg overflow-hidden">
            <img src={image} alt={alt} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-transparent group-hover:bg-[#0057ff] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
    );
}
