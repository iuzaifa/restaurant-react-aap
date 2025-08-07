import React, { useState } from 'react';
import { Heart, Star, Clock, Users, Filter, Search, ChefHat } from 'lucide-react';

const RestaurantDishes = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const dishes = [
        {
            id: 1,
            name: "Truffle Pasta Primavera",
            description: "Handmade fettuccine with black truffle, seasonal vegetables, and parmesan cream sauce",
            price: 28.99,
            originalPrice: 32.99,
            category: "pasta",
            rating: 4.8,
            reviews: 124,
            prepTime: "15-20 min",
            servings: 1,
            isNew: true,
            isPopular: false,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Mediterranean Seafood Platter",
            description: "Fresh lobster tail, grilled prawns, mussels, and calamari with herb-infused olive oil",
            price: 45.99,
            category: "seafood",
            rating: 4.9,
            reviews: 89,
            prepTime: "25-30 min",
            servings: 2,
            isNew: false,
            isPopular: true,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Wild Mushroom Risotto",
            description: "Creamy Arborio rice with porcini, shiitake, and oyster mushrooms, finished with truffle oil",
            price: 24.99,
            category: "vegetarian",
            rating: 4.7,
            reviews: 156,
            prepTime: "20-25 min",
            servings: 1,
            isNew: false,
            isPopular: false,
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "Grilled Atlantic Salmon",
            description: "Wild-caught salmon with lemon herb butter, roasted vegetables, and quinoa pilaf",
            price: 32.99,
            category: "seafood",
            rating: 4.6,
            reviews: 203,
            prepTime: "18-22 min",
            servings: 1,
            isNew: false,
            isPopular: true,
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop"
        },
        {
            id: 5,
            name: "Wagyu Beef Tenderloin",
            description: "Premium A5 wagyu with roasted garlic mash, seasonal greens, and red wine jus",
            price: 68.99,
            category: "meat",
            rating: 5.0,
            reviews: 67,
            prepTime: "30-35 min",
            servings: 1,
            isNew: true,
            isPopular: true,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        },
        {
            id: 6,
            name: "Vegan Buddha Bowl",
            description: "Quinoa, roasted vegetables, avocado, tahini dressing, and sprouted seeds",
            price: 19.99,
            category: "vegetarian",
            rating: 4.5,
            reviews: 92,
            prepTime: "12-15 min",
            servings: 1,
            isNew: false,
            isPopular: false,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
            id: 7,
            name: "Duck Confit Ravioli",
            description: "House-made pasta filled with duck confit, served with cherry sauce and microgreens",
            price: 34.99,
            category: "pasta",
            rating: 4.8,
            reviews: 78,
            prepTime: "22-28 min",
            servings: 1,
            isNew: true,
            isPopular: false,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
            id: 8,
            name: "Pan-Seared Scallops",
            description: "Diver scallops with cauliflower puree, pancetta crisps, and microgreens",
            price: 38.99,
            category: "seafood",
            rating: 4.9,
            reviews: 134,
            prepTime: "16-20 min",
            servings: 1,
            isNew: false,
            isPopular: true,
            image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Dishes', count: dishes.length },
        { id: 'pasta', name: 'Pasta', count: dishes.filter(d => d.category === 'pasta').length },
        { id: 'seafood', name: 'Seafood', count: dishes.filter(d => d.category === 'seafood').length },
        { id: 'meat', name: 'Meat', count: dishes.filter(d => d.category === 'meat').length },
        { id: 'vegetarian', name: 'Vegetarian', count: dishes.filter(d => d.category === 'vegetarian').length }
    ];

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

    const filteredDishes = dishes.filter(dish => {
        const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
        const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dish.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <ChefHat className="text-amber-500 w-8 h-8" />
                        <span className="text-amber-500 font-semibold tracking-wide">SIGNATURE COLLECTION</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                        Culinary Excellence
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Experience our chef's carefully curated selection of artisanal dishes, crafted with the finest ingredients and innovative techniques
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search dishes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Filter Icon */}
                        <div className="flex items-center gap-2 text-slate-600">
                            <Filter className="w-5 h-5" />
                            <span className="text-sm font-medium">Filter by category</span>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-600 hover:shadow-md'
                                    }`}
                            >
                                {category.name} <span className="text-sm opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredDishes.map(dish => (
                        <div key={dish.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${dish.image})` }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {dish.isNew && (
                                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW</span>
                                    )}
                                    {dish.isPopular && (
                                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">POPULAR</span>
                                    )}
                                </div>

                                {/* Favorite Button */}
                                <button
                                    onClick={() => toggleFavorite(dish.id)}
                                    className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-100 transition-all transform hover:scale-110"
                                >
                                    <Heart
                                        className={`w-5 h-5 transition-colors ${favorites.has(dish.id) ? 'text-red-500 fill-red-500' : 'text-slate-400'
                                            }`}
                                    />
                                </button>

                                {/* Price Tag */}
                                <div className="absolute bottom-4 right-4">
                                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                        ${dish.price}
                                        {dish.originalPrice && (
                                            <span className="ml-2 line-through text-orange-200 text-sm">
                                                ${dish.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {dish.name}
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {dish.description}
                                </p>

                                {/* Rating and Reviews */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        <span className="font-bold text-slate-900">{dish.rating}</span>
                                        <span className="text-slate-500 text-sm">({dish.reviews} reviews)</span>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{dish.prepTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>Serves {dish.servings}</span>
                                    </div>
                                </div>

                                {/* Order Button */}
                                <button className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Add to Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredDishes.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No dishes found</h3>
                        <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* Stats */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
                        <span className="text-slate-600">Showing</span>
                        <span className="font-bold text-amber-600">{filteredDishes.length}</span>
                        <span className="text-slate-600">of {dishes.length} dishes</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestaurantDishes;