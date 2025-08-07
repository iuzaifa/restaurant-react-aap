import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';


const Dropdown = ({ trigger, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
            >
                {trigger}
            </div>

            <div className={cn(
                "absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-3 border border-gray-100 mt-2 transition-all duration-200",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
                className
            )}>
                {children}
            </div>
        </div>
    );
};

const DropdownItem = ({ children, onClick, className = "" }) => (
    <button
        onClick={onClick}
        className={cn(
            "w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium",
            className
        )}
    >
        {children}
    </button>
);

Dropdown.Item = DropdownItem;

export default Dropdown;
