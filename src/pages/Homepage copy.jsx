import React from 'react';
import { Star, Clock, MapPin, Phone, ChefHat, Utensils, Award } from 'lucide-react';

const Homepage = () => {
    const featuredDishes = [
        {
            id: 1,
            name: "Grilled Salmon",
            description: "Fresh Atlantic salmon with herb butter and roasted vegetables",
            price: "$28",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop&crop=center",
            rating: 4.8,
            isSpecial: true
        },
        {
            id: 2,
            name: "Beef Tenderloin",
            description: "Prime cut with truffle sauce and garlic mashed potatoes",
            price: "$35",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop&crop=center",
            rating: 4.9
        },
        {
            id: 3,
            name: "Lobster Risotto",
            description: "Creamy arborio rice with fresh lobster and saffron",
            price: "$32",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d7d3?w=300&h=200&fit=crop&crop=center",
            rating: 4.7
        },
        {
            id: 4,
            name: "Chocolate Soufflé",
            description: "Warm chocolate soufflé with vanilla ice cream",
            price: "$14",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop&crop=center",
            rating: 4.6
        }
    ];

    const restaurantInfo = {
        name: "Bella Vista",
        tagline: "Fine Dining Experience",
        description: "Welcome to Bella Vista, where culinary artistry meets warm hospitality. Our chef-driven menu features locally sourced ingredients transformed into extraordinary dishes that celebrate both tradition and innovation.",
        phone: "+1 (555) 123-4567",
        address: "123 Gourmet Street, Downtown",
        hours: "11:00 AM - 11:00 PM",
        rating: { stars: 5, score: "4.8", reviews: "2,847" }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Section - Hero Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Restaurant Header */}
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                                <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                                    <ChefHat className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                        {restaurantInfo.name}
                                    </h1>
                                    <p className="text-lg text-amber-600 font-medium">{restaurantInfo.tagline}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(restaurantInfo.rating.stars)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-gray-700 font-semibold">
                                    {restaurantInfo.rating.score}
                                </span>
                                <span className="text-gray-500">
                                    ({restaurantInfo.rating.reviews} reviews)
                                </span>
                                <Award className="w-5 h-5 text-amber-500 ml-2" />
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&crop=center"
                                alt="Restaurant Interior"
                                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Utensils className="w-5 h-5" />
                                    <span className="text-sm font-medium">Michelin Recommended</span>
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                                    An Unforgettable Culinary Journey
                                </h2>
                                <p className="text-white/90 text-sm lg:text-base">
                                    Experience the perfect blend of ambiance, service, and exceptional cuisine
                                </p>
                            </div>
                        </div>

                        {/* Welcome Message */}
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span>Welcome to {restaurantInfo.name}</span>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {restaurantInfo.description}
                            </p>

                            {/* Contact Info */}
                            <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Phone className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-medium">{restaurantInfo.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <MapPin className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-medium">{restaurantInfo.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Clock className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-medium">{restaurantInfo.hours}</span>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Reserve Your Table
                            </button>
                            <button className="flex-1 border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-all duration-300">
                                View Full Menu
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Featured Dishes */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <Utensils className="w-6 h-6 text-amber-600" />
                                    Featured Dishes
                                </h3>

                                <div className="space-y-4">
                                    {featuredDishes.map((dish) => (
                                        <div key={dish.id} className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-amber-200 transition-all duration-300 hover:shadow-md">
                                            <div className="flex gap-3 p-3">
                                                <div className="relative">
                                                    <img
                                                        src={dish.image}
                                                        alt={dish.name}
                                                        className="w-20 h-20 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    {dish.isSpecial && (
                                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                                            Special
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between mb-1">
                                                        <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                                                            {dish.name}
                                                        </h4>
                                                        <span className="font-bold text-amber-600 text-sm whitespace-nowrap ml-2">
                                                            {dish.price}
                                                        </span>
                                                    </div>

                                                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                                        {dish.description}
                                                    </p>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-1">
                                                            <Star size={12} className="fill-yellow-400 text-yellow-400" />
                                                            <span className="text-xs text-gray-600 font-medium">
                                                                {dish.rating}
                                                            </span>
                                                        </div>
                                                        <button className="text-xs bg-amber-50 text-amber-600 px-3 py-1 rounded-full hover:bg-amber-100 transition-colors font-medium">
                                                            Order Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-6 bg-gradient-to-r from-gray-50 to-amber-50 border border-amber-200 text-amber-700 py-3 rounded-xl font-semibold hover:from-amber-50 hover:to-amber-100 transition-all duration-300">
                                    View All Menu Items
                                </button>
                            </div>

                            {/* Special Offer */}
                            <div className="mt-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl p-6 shadow-lg">
                                <h4 className="font-bold text-lg mb-2">🎉 Weekend Special</h4>
                                <p className="text-amber-100 text-sm mb-3">
                                    Get 20% off on all appetizers this weekend. Limited time offer!
                                </p>
                                <button className="w-full bg-white text-amber-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Claim Offer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;