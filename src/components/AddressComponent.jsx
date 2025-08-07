import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const AddressComponent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-amber-900 mb-3">Contact Information</h1>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                        Reach out to us through any of these channels. We're always happy to connect with you!
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-amber-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <Mail className="text-amber-800" size={28} />
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900 mb-2">Email Address</h2>
                        <p className="text-amber-800 mb-6">
                            Feel free to reach out for any inquiries or support needs.
                        </p>
                        <a
                            href="mailto:contact@example.com"
                            className="text-amber-700 font-medium hover:text-amber-900 flex items-center group"
                        >
                            contact@example.com
                            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                    </div>

                    {/* Office Card */}
                    <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-amber-300 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <MapPin className="text-amber-900" size={28} />
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900 mb-2">Office Address</h2>
                        <p className="text-amber-800 mb-6">
                            Visit us at our headquarters during business hours.
                        </p>
                        <div className="text-amber-700">
                            <p className="font-medium">123 Business Avenue</p>
                            <p>Suite 405, Downtown</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-gradient-to-br from-amber-300 to-amber-400 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-amber-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            <Phone className="text-amber-900" size={28} />
                        </div>
                        <h2 className="text-xl font-semibold text-amber-900 mb-2">Phone</h2>
                        <p className="text-amber-800 mb-6">
                            Call us directly for immediate assistance.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="tel:+11234567890"
                                className="text-amber-700 font-medium hover:text-amber-900 flex items-center group"
                            >
                                +1 (123) 456-7890
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                            <a
                                href="tel:+19876543210"
                                className="text-amber-700 font-medium hover:text-amber-900 flex items-center group"
                            >
                                +1 (987) 654-3210
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center text-amber-700">
                    <p className="text-lg">We're available Monday-Friday, 9AM-5PM EST</p>
                    <p className="mt-2 text-amber-800">Connect with us on social media for updates and news</p>
                </div>
            </div>
        </div>
    );
};

export default AddressComponent;