import React from 'react'
import { MapPin, Phone } from 'lucide-react';

const Branches = () => {
    const branches = [
        { id: 1, name: "Downtown Branch", address: "Jasola Vihar New Delhi Near Metro Station", phone: "+91 9123456780" },
        { id: 2, name: "Riverside Branch", address: "Noida City Mall", phone: "+91 8123456790" },
        { id: 3, name: "Hillside Branch", address: "Gurgaon Millennium city", phone: "+91 7123456890" }
    ];

    return (
        <>
            <section className="py-16 bg-gray-50 px-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Branches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {branches.map(branch => (
                            <div key={branch.id} className="bg-gray-100 border-2 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow ">
                                <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
                                <p className="text-gray-600 mb-2 flex items-center">
                                    <MapPin className="mr-2 text-amber-600 " size={18} /> {branch.address}
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <Phone className="mr-2 text-amber-600 " size={18} /> {branch.phone}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Branches