import React from 'react';
import { ChefHat } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';


const Logo = () => {
    const isScrolled = useScroll();

    return (
        <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl shadow-lg">
                <ChefHat
                    size={isScrolled ? 24 : 28}
                    className="text-white transition-all duration-300"
                />
            </div>
            <div className="hidden sm:block">
                <h1 className={`font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                    Bite Restaurant
                </h1>
                <p className="text-xs text-gray-600 font-medium">Fine Dining Experience</p>
            </div>
            <div className="sm:hidden">
                <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Bite Bite
                </h1>
            </div>
        </div>
    );
};

export default Logo;