// import React from 'react'
// import { Heart} from 'lucide-react';

// const Dishes = () => {

//     const dishes = [
//         { id: 1, name: "Truffle Pasta", description: "Creamy pasta with black truffle", price: "$18.99" },
//         { id: 2, name: "Seafood Platter", description: "Fresh catch of the day with seasonal seafood", price: "$24.99" },
//         { id: 3, name: "Vegetable Risotto", description: "Arborio rice with seasonal vegetables", price: "$16.99" },
//         { id: 4, name: "Grilled Salmon", description: "Wild-caught salmon with herb butter", price: "$22.99" }
//     ];
//     return (
//         <>
//             <section className="py-16 px-10">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specialties</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {dishes.map(dish => (
//                             <div key={dish.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
//                                 <div className="h-48 bg-gray-200 relative">
//                                     {/* Dish image placeholder */}
//                                     <div className="absolute top-2 right-2 bg-white rounded-full p-2">
//                                         <Heart className="text-gray-500 hover:text-red-500 cursor-pointer" />
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h3 className="text-xl font-bold">{dish.name}</h3>
//                                             <p className="text-gray-600 mt-1">{dish.description}</p>
//                                         </div>
//                                         <span className="text-amber-600 font-bold">{dish.price}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Dishes

import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Dishes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [favorites, setFavorites] = useState(new Set());

    const dishes = [
        {
            id: 1,
            name: "Truffle Pasta",
            description: "Creamy pasta with black truffle",
            price: "$18.99",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Seafood Platter",
            description: "Fresh catch of the day with seasonal seafood",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Vegetable Risotto",
            description: "Arborio rice with seasonal vegetables",
            price: "$16.99",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "Grilled Salmon",
            description: "Wild-caught salmon with herb butter",
            price: "$22.99",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"
        },
        {
            id: 5,
            name: "Beef Wellington",
            description: "Classic beef wrapped in puff pastry",
            price: "$32.99",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        },
        {
            id: 6,
            name: "Duck Confit",
            description: "Slow-cooked duck leg with herbs",
            price: "$28.99",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % Math.ceil(dishes.length / getItemsPerView()));
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlay, dishes.length]);

    // Get items per view based on screen size
    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3; // lg
            if (window.innerWidth >= 768) return 2;  // md
            return 1; // sm
        }
        return 3;
    };

    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.ceil(dishes.length / itemsPerView) - 1;

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % (maxIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const toggleFavorite = (dishId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(dishId)) {
                newFavorites.delete(dishId);
            } else {
                newFavorites.add(dishId);
            }
            return newFavorites;
        });
    };

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay);
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header with controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 ">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Our Specialties</h2>
                        <p className="text-slate-600 text-lg">Discover our chef's carefully crafted dishes</p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleAutoPlay}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            <span className="text-sm font-medium">{isAutoPlay ? 'Pause' : 'Play'}</span>
                        </button>

                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-amber-300 transition-all transform hover:scale-105"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-700" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-amber-300 transition-all transform hover:scale-105"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-700" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden rounded-2xl">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / (maxIndex + 1))}%)`,
                            width: `${(maxIndex + 1) * 100}%`
                        }}
                    >
                        {Array.from({ length: maxIndex + 1 }).map((_, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="flex gap-6"
                                style={{ width: `${100 / (maxIndex + 1)}%` }}
                            >
                                {dishes.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map(dish => (
                                    <div
                                        key={dish.id}
                                        className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                                    >
                                        {/* Image Container */}
                                        <div className="h-48 relative overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${dish.image})` }}
                                            />

                                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />

                                            {/* Heart Button */}
                                            <button
                                                onClick={() => toggleFavorite(dish.id)}
                                                className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-100 transition-all transform hover:scale-110"
                                            >
                                                <Heart
                                                    className={`w-5 h-5 transition-colors ${favorites.has(dish.id)
                                                        ? 'text-red-500 fill-red-500'
                                                        : 'text-slate-400 hover:text-red-500'
                                                        }`}
                                                />
                                            </button>

                                            {/* Price Badge */}
                                            <div className="absolute bottom-3 right-3">
                                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                                    {dish.price}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                                {dish.name}
                                            </h3>
                                            <p className="text-slate-600 mb-4 leading-relaxed">
                                                {dish.description}
                                            </p>
                                            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors transform hover:scale-105 duration-200">
                                                Add to Order
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center mt-8 gap-3">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                ? 'w-8 h-3 bg-gradient-to-r from-amber-500 to-orange-500'
                                : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 max-w-xs mx-auto">
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 rounded-full"
                            style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>{currentIndex + 1} of {maxIndex + 1}</span>
                        <span>{dishes.length} dishes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dishes;