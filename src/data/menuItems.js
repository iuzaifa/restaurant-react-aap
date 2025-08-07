import { Home, Info, Calendar, Mail, Utensils } from 'lucide-react';

export const menuItems = [
    {
        id: 'home',
        label: 'Home',
        href: '/',
        icon: Home
    },
    {
        id: 'menu',
        label: 'Menu',
        href: '/menu',
        icon: Utensils,
        hasDropdown: false,
        dropdownItems: [
            { id: 'appetizers', label: '🥗 Appetizers', href: '#appetizers' },
            { id: 'mains', label: '🍖 Main Courses', href: '#mains' },
            { id: 'desserts', label: '🍰 Desserts', href: '#desserts' },
            { id: 'beverages', label: '🥤 Beverages', href: '#beverages' },
            { id: 'specials', label: '✨ Today\'s Specials', href: '#specials', special: true }
        ]
    },
    {
        id: 'about',
        label: 'About',
        href: '/about',
        icon: Info
    },
    {
        id: 'reservations',
        label: 'Reservations',
        href: '/reservation',
        icon: Calendar
    },
    {
        id: 'contact',
        label: 'Contact',
        href: '/contacts',
        icon: Mail
    }
];

export const contactInfo = {
    phone: '+91-6387869214',
    address: 'NEW DELHI, INDIA',
    hours: 'Open: 11AM - 11PM Daily',
    rating: {
        stars: 5,
        score: 4.9,
        reviews: '2.1k'
    },
    promotion: 'Free Delivery Over $49'
};