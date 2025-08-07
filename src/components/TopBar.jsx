
import React from 'react';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { contactInfo } from '../data/menuItems';

const TopBar = () => {
    return (
        <div className="bg-gradient-to-r bg-gray-900 via-gray-800 to-orange-900 text-gray-600 py-1 px-4 text-sm hidden lg:block">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={14} className="text-gray-300" />
                        <span className="font-medium">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <MapPin size={14} className="text-gray-300" />
                        <span>{contactInfo.address}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Clock size={14} className="text-gray-300" />
                        <span>{contactInfo.hours}</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        {[...Array(contactInfo.rating.stars)].map((_, i) => (
                            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-xs font-medium">
                            {contactInfo.rating.score} ({contactInfo.rating.reviews} reviews)
                        </span>
                    </div>
                    <div className="text-xs bg-gray-700 px-3 py-1 rounded-full">
                        {contactInfo.promotion}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
