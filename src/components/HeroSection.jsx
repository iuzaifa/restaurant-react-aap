import React from 'react'
import { Utensils } from 'lucide-react';
import ButtonLink from '../components/ButtonLink';


const HeroSection = () => {
    return (
        <>
            <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">Bite Restaurant</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience culinary excellence with our handcrafted dishes made from locally sourced ingredients</p>
                        <div className="flex justify-center gap-4">
                            <ButtonLink to="/view-menu" className="bg-amber-600 hover:bg-amber-700 text-white flex items-center">
                                <Utensils className="mr-2" size={20} /> View Menu
                            </ButtonLink>
                            <ButtonLink to="/reservation" className="bg-white hover:bg-gray-100 text-amber-600">
                                Book a Table
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection