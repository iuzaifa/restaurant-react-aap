import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import { menuItems } from '../data/menuItems';
import { cn } from '../utils/cn';
import { useNavigate } from 'react-router-dom';

const DesktopMenu = () => {


    // const handleMenuClick = (href) => {
    //     // Handle navigation
    //     console.log('Navigate to:', href);
    // };

    const navigate = useNavigate();

    const handleMenuClick = (href) => {
        navigate(href);
    };

   
    return (
        <div className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => {
                if (item.hasDropdown) {
                    return (
                        <Dropdown
                            key={item.id}
                            trigger={
                                <Button variant="ghost" className="px-4 py-2 rounded-lg group">
                                    <item.icon size={16} />
                                    {item.label}
                                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                                </Button>
                            }
                        >
                            <div className="px-4 py-2">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                    Our Menu
                                </h4>
                            </div>
                            {item.dropdownItems.map((dropdownItem) => (
                                <Dropdown.Item
                                    key={dropdownItem.id}
                                    onClick={() => handleMenuClick(dropdownItem.href)}
                                    className={cn(
                                        dropdownItem.special && "text-amber-600 hover:bg-amber-50 font-semibold"
                                    )}
                                >
                                    {dropdownItem.label}
                                </Dropdown.Item>
                            ))}
                        </Dropdown>
                    );
                }

                return (
                    <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => handleMenuClick(item.href)}
                        className="px-4 py-2 rounded-lg"
                    >
                        <item.icon size={16} />
                        {item.label}
                    </Button>
                );
            })}
        </div>
    );
};

export default DesktopMenu;