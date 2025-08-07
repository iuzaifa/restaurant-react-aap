// src/App.js
import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, ChevronDown, Send, Quote, Contact } from 'lucide-react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        issue: '',
        comment: ''
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.firstName || !formData.email || !formData.comment) {
            setSubmitStatus('error');
            return;
        }

        // Simulate form submission
        setSubmitStatus('submitting');

        setTimeout(() => {
            setSubmitStatus('success');
            // Reset form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                issue: '',
                comment: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Quote Section */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-amber-500 to-amber-700 p-8 md:p-10 relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white"></div>
                            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white"></div>
                        </div>

                        <div className="relative z-10 text-white h-full flex flex-col">
                            <div className="mb-8">
                                <Quote className="w-10 h-10 mb-6 text-amber-200" />
                                <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-6">
                                    "Food is our common ground, a universal experience that brings people together across cultures and generations. At the table, we share not just meals, but stories, laughter, and the essence of our humanity."
                                </blockquote>
                                <p className="text-base font-medium text-amber-100 text-right">— Chef Marco Rossi</p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-amber-400/30">
                                <h3 className="text-xl font-bold mb-3">Savory Bites Restaurant</h3>
                                <div className="space-y-1">
                                    <p className="flex items-center text-sm">
                                        <span className="inline-block w-5 mr-2 text-amber-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                            </svg>
                                        </span>
                                        123 Gourmet Avenue, Culinary City
                                    </p>
                                    <p className="flex items-center text-sm">
                                        <span className="inline-block w-5 mr-2 text-amber-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </span>
                                        info@savorybites.com
                                    </p>
                                    <p className="flex items-center text-sm">
                                        <span className="inline-block w-5 mr-2 text-amber-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                            </svg>
                                        </span>
                                        (123) 456-7890
                                    </p>
                                    <p className="flex items-center text-sm">
                                        <span className="inline-block w-5 mr-2 text-amber-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                        </span>
                                        Open daily: 11:00 AM - 10:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:w-3/5 p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-amber-800 mb-1">Contact Us</h2>
                        <p className="text-gray-600 mb-6">Have questions or feedback? We're here to help!</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name <span className="text-amber-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="pl-10 w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-sm"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="pl-10 w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-sm"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="pl-10 w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-sm"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address <span className="text-amber-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="pl-10 w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-sm"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                                    Select Issue <span className="text-amber-600">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="issue"
                                        name="issue"
                                        value={formData.issue}
                                        onChange={handleChange}
                                        className="appearance-none w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition pr-10 bg-white text-sm"
                                        required
                                    >
                                        <option value="" disabled>Please select an issue</option>
                                        <option value="reservation">Table Reservation</option>
                                        <option value="feedback">Feedback & Suggestions</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="event">Event Inquiry</option>
                                        <option value="catering">Catering Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message <span className="text-amber-600">*</span>
                                </label>
                                <div className="relative">
                                    <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        rows="4"
                                        className="pl-10 w-full py-2.5 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-sm"
                                        placeholder="Tell us how we can help..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className={`w-full py-2.5 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center text-sm ${submitStatus === 'submitting'
                                        ? 'bg-amber-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg'
                                    }`}
                            >
                                {submitStatus === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200 flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                    </svg>
                                    Please fill in all required fields.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;