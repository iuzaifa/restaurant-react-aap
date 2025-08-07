
import React from 'react';
import { ChevronDown, User, Star, Phone, Clock } from 'lucide-react';
import Button from '../components/Button';
import { useToggle } from '../hooks/useToggle';
import { menuItems, contactInfo } from '../data/menuItems';
import { cn } from '../utils/cn';
import { useNavigate } from 'react-router-dom';



const MobileMenu = ({ isOpen }) => {
    const [activeDropdown, { toggle: toggleDropdown }] = useToggle();

   
    const navigate = useNavigate();

    const handleMenuClick = (href) => {
        navigate(href);
    };

    return (
        
        <div className={cn(
            "xl:hidden transition-all duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-white to-gray-50 border-t border-gray-100",
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}>
            <div className="px-4 sm:px-6 py-6">

                {/* Mobile Contact Info */}
                <div className="lg:hidden mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-amber-800">
                            <Phone size={14} className="text-amber-600" />
                            <span className="font-medium">{contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-amber-800">
                            <Clock size={14} className="text-amber-600" />
                            <span>Open: 11AM - 11PM</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                    {menuItems.map((item) => {
                        if (item.hasDropdown) {
                            return (
                                <div key={item.id}>
                                    <button
                                        onClick={toggleDropdown}
                                        className="w-full flex items-center justify-between gap-3 py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50 font-medium transition-colors rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} />
                                            {item.label}
                                        </div>
                                        <ChevronDown size={16} className={cn(
                                            "transition-transform duration-200",
                                            activeDropdown ? 'rotate-180' : ''
                                        )} />
                                    </button>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-200",
                                        activeDropdown ? 'max-h-64' : 'max-h-0'
                                    )}>
                                        <div className="pl-10 pr-4 py-2 space-y-1">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <button
                                                    key={dropdownItem.id}
                                                    onClick={() => handleMenuClick(dropdownItem.href)}
                                                    className={cn(
                                                        "block w-full text-left py-2 transition-colors",
                                                        dropdownItem.special
                                                            ? "text-amber-600 hover:text-amber-700 font-semibold"
                                                            : "text-gray-600 hover:text-amber-600"
                                                    )}
                                                >
                                                    {dropdownItem.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleMenuClick(item.href)}
                                className="w-full flex items-center gap-3 py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50 font-medium transition-colors rounded-lg text-left"
                            >
                                <item.icon size={18} />
                                {item.label}
                            </button>
                        );
                    })}

                    {/* Mobile User Account */}
                    <button className="sm:hidden w-full flex items-center gap-3 py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50 font-medium transition-colors rounded-lg text-left">
                        <User size={18} />
                        My Account
                    </button>
                </div>

                {/* Mobile Action Buttons */}
                <div className="mt-6 space-y-3">
                    <Button size="xl" className="w-full py-3.5">
                        <Clock size={18} />
                        Reserve Table
                    </Button>

                    {/* Mobile Rating */}
                    <div className="flex items-center justify-center gap-2 py-2">
                        <div className="flex items-center gap-1">
                            {[...Array(contactInfo.rating.stars)].map((_, i) => (
                                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">
                            {contactInfo.rating.score} ({contactInfo.rating.reviews} reviews)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;