import React from 'react';
import { cn } from '../utils/cn';

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon: Icon,
    disabled = false,
    onClick,
    ...props
}) => {
    const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white hover:from-amber-600 hover:via-orange-600 hover:to-red-600 focus:ring-amber-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500",
        ghost: "text-gray-700 hover:text-amber-600 hover:bg-amber-50 focus:ring-amber-500",
        icon: "p-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200 group"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg"
    };

    const sizeClass = variant === "icon" ? "p-2.5" : sizes[size];

    return (
        <button
            className={cn(baseClasses, variants[variant], sizeClass, className)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {Icon && variant === "icon" ? (
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
            ) : (
                <div className="flex items-center gap-2">
                    {Icon && <Icon size={16} />}
                    {children}
                </div>
            )}
        </button>
    );
};

export default Button;