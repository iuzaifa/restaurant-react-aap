import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, Facebook, Heart,} from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="font-sans bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Logo className="h-10 w-auto" />
                        <p className="text-gray-500 max-w-xs">
                            Building innovative solutions for tomorrow's challenges. We specialize in cutting-edge technology and design.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Contact Us</h3>
                        <ul className="space-y-3 text-gray-500">
                            <li className="flex items-start">
                                <Mail className="text-amber-600 mt-1 mr-3 flex-shrink-0" size={18} />
                                <span>abuhuzaifaw7@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="text-amber-600 mt-1 mr-3 flex-shrink-0" size={18} />
                                <span>+91-6387869214</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="text-amber-600 mt-1 mr-3 flex-shrink-0" size={18} />
                                <span>123 Jasola Vihar,Metro Station New Delhi India </span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Projects</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">Blog</a></li>
                            <li><Link to="/contacts" className="text-gray-500 hover:text-amber-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">Newsletter</h3>
                        <p className="text-gray-500">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <form className="mt-2 flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
                            />
                            <button
                                type="submit"
                                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg font-medium transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-1"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-3">
                    <p className="text-gray-400 text-sm md:mb-0 flex items-center">
                        © {new Date().getFullYear()} Acone Inc. All rights reserved.
                    </p>
                    <div className="text-center text-gray-500 text-sm flex items-center justify-center">
                        Meet On Github <Heart className="text-red-100 mx-1" size={16} fill="red" /> Abu Huzaifa     {' '}
                        <a href="https://github.com/iuzaifa" target="_blank" rel="noopener noreferrer" className='px-2 text-red-600  '>
                             Click Here
                        </a>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;