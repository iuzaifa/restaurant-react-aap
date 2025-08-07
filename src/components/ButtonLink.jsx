import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn'; // if using a classnames helper

const ButtonLink = ({ to, className, children }) => {
    return (
        <Link
            to={to}
            className={cn(
                'font-bold py-3 px-6 rounded-full transition-colors duration-200',
                className
            )}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
