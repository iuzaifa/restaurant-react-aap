import React, { useState, useEffect } from 'react';
import { Star, Award, Heart, Leaf, Clock, Users, ChefHat, Trophy, Quote, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/BreadCrumb';
import TopBar from '../components/TopBar';

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentChef, setCurrentChef] = useState(0);

  // Client testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Food Critic, NY Times",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Bite Restaurant has redefined fine dining in the city. Every dish is a masterpiece that tells a story of culinary excellence and passion.",
      highlight: "Redefined fine dining"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Celebrity Chef",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The innovation and technique displayed at Bite is extraordinary. This is what the future of gastronomy looks like.",
      highlight: "Future of gastronomy"
    },
    {
      id: 3,
      name: "Elena Volkov",
      title: "Michelin Guide Inspector",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Bite consistently delivers exceptional quality with impeccable service. A true gem deserving of recognition.",
      highlight: "Exceptional quality"
    },
    {
      id: 4,
      name: "David Chen",
      title: "Food & Wine Magazine",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The attention to detail and commitment to sustainability makes Bite stand out in today's culinary landscape.",
      highlight: "Commitment to sustainability"
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: Award,
      title: "Award-Winning Cuisine",
      description: "Recognized by Michelin Guide and James Beard Foundation for culinary excellence",
      color: "text-amber-400"
    },
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "Farm-to-table approach with locally sourced, organic ingredients from trusted partners",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "Personalized dining experience with attention to every detail and dietary preference",
      color: "text-red-400"
    },
    {
      icon: Clock,
      title: "Time-Honored Techniques",
      description: "Traditional cooking methods combined with modern innovation for unique flavor profiles",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local farmers, artisans, and giving back to our community through various initiatives",
      color: "text-purple-400"
    },
    {
      icon: Trophy,
      title: "Industry Recognition",
      description: "Multiple accolades including 'Best Fine Dining' and 'Restaurant of the Year' awards",
      color: "text-orange-400"
    }
  ];

  // Chefs data
  const chefs = [
    {
      id: 1,
      name: "Chef Alexandre Dubois",
      title: "Executive Chef & Owner",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=500&fit=crop&crop=face",
      experience: "20+ Years",
      specialty: "French Haute Cuisine",
      awards: ["James Beard Award Winner", "Michelin Star Chef", "Best Chef 2023"],
      bio: "With over two decades of culinary excellence, Chef Alexandre brings his mastery of French techniques and innovative vision to create unforgettable dining experiences.",
      signature: "Truffle-infused dishes"
    },
    {
      id: 2,
      name: "Chef Maria Gonzalez",
      title: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop&crop=face",
      experience: "15+ Years",
      specialty: "Artisan Desserts",
      awards: ["World Pastry Cup Champion", "Best Dessert Innovation", "Rising Star Award"],
      bio: "Chef Maria's artistic approach to pastry combines traditional techniques with modern presentation, creating desserts that are both visually stunning and delicious.",
      signature: "Chocolate sculptures"
    },
    {
      id: 3,
      name: "Chef Kenji Nakamura",
      title: "Sushi Master",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=500&fit=crop&crop=face",
      experience: "25+ Years",
      specialty: "Traditional Japanese",
      awards: ["Sushi Master Certification", "Tokyo Culinary Excellence", "Heritage Preservation Award"],
      bio: "Trained in Tokyo's finest establishments, Chef Kenji brings authentic Japanese techniques and the freshest ingredients to create sublime sushi experiences.",
      signature: "Omakase experiences"
    },
    {
      id: 4,
      name: "Chef Isabella Romano",
      title: "Sous Chef",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=face",
      experience: "12+ Years",
      specialty: "Mediterranean Fusion",
      awards: ["Young Chef of the Year", "Innovation in Cuisine", "Sustainability Champion"],
      bio: "Chef Isabella's Mediterranean background and modern techniques create bold, flavorful dishes that celebrate the region's rich culinary heritage.",
      signature: "Seasonal tasting menus"
    }
  ];

  // Top foods data
  const topFoods = [
    {
      id: 1,
      name: "Wagyu Beef Wellington",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      price: "$85",
      description: "Premium wagyu beef wrapped in puff pastry with mushroom duxelles and herbs",
      chef: "Chef Alexandre",
      rating: 5.0,
      orders: "2,450+ orders",
      tags: ["Signature", "Premium", "Award Winner"]
    },
    {
      id: 2,
      name: "Lobster Thermidor Reimagined",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop",
      price: "$68",
      description: "Fresh Maine lobster with cognac cream sauce and gruyere cheese",
      chef: "Chef Alexandre",
      rating: 4.9,
      orders: "1,890+ orders",
      tags: ["Seafood", "Classic", "Popular"]
    },
    {
      id: 3,
      name: "Omakase Sushi Experience",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      price: "$120",
      description: "Chef's choice 12-piece sushi journey with seasonal selections",
      chef: "Chef Kenji",
      rating: 5.0,
      orders: "980+ orders",
      tags: ["Traditional", "Fresh", "Chef's Choice"]
    },
    {
      id: 4,
      name: "Chocolate Sphere Dessert",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
      price: "$28",
      description: "Interactive dessert with warm chocolate sphere revealing surprise inside",
      chef: "Chef Maria",
      rating: 4.8,
      orders: "3,120+ orders",
      tags: ["Interactive", "Signature", "Instagram Famous"]
    },
    {
      id: 5,
      name: "Mediterranean Seafood Platter",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      price: "$75",
      description: "Fresh catch with olive tapenade, roasted vegetables, and saffron aioli",
      chef: "Chef Isabella",
      rating: 4.7,
      orders: "1,560+ orders",
      tags: ["Healthy", "Mediterranean", "Sustainable"]
    },
    {
      id: 6,
      name: "Truffle Risotto Supreme",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      price: "$52",
      description: "Arborio rice with black truffle, parmesan, and white wine reduction",
      chef: "Chef Alexandre",
      rating: 4.9,
      orders: "2,780+ orders",
      tags: ["Vegetarian", "Luxury", "Comfort Food"]
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <>
      <TopBar/>
      <Navbar />
      <Breadcrumb currentPage="About Us" moverUrl="/" />
      <div className="min-h-screen  bg-gray-800">
        {/* Hero Section */}
        <section className="relative py-24 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-800"></div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              About Bite Restaurant
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Where culinary artistry meets exceptional hospitality. Since 2010, we've been crafting unforgettable
              dining experiences that celebrate the finest ingredients, innovative techniques, and timeless traditions.
            </p>
            <div className="mt-8 flex justify-center gap-8 text-amber-400">
              <div className="text-center">
                <div className="text-3xl font-bold">13+</div>
                <div className="text-gray-300">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500K+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-gray-300">Awards Won</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="py-16 px-6 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">What Industry Experts Say</h2>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 mx-4">
                        <div className="text-center max-w-4xl mx-auto">
                          <Quote className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                          <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                            "{testimonial.text}"
                          </p>

                          <div className="flex items-center justify-center gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full border-2 border-amber-400"
                            />
                            <div className="text-left">
                              <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                              <p className="text-gray-400">{testimonial.title}</p>
                              <div className="flex gap-1 mt-1">
                                {renderStars(testimonial.rating)}
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 inline-block bg-amber-500/20 px-4 py-2 rounded-full border border-amber-500/30">
                            <span className="text-amber-400 font-medium">"{testimonial.highlight}"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-amber-400' : 'bg-white/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Bite Restaurant</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group">
                    <div className=" backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-full bg-white/10 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-8 h-8 ${benefit.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Chefs Section */}
        <section className="py-16 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Master Chefs</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {chefs.map((chef, index) => (
                <div key={chef.id} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={chef.image}
                          alt={chef.name}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <ChefHat className="w-6 h-6 text-amber-400" />
                          <h3 className="text-2xl font-bold text-white">{chef.name}</h3>
                        </div>

                        <p className="text-amber-400 font-semibold mb-3">{chef.title}</p>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-gray-400">Experience:</span>
                            <span className="text-white ml-2">{chef.experience}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Specialty:</span>
                            <span className="text-white ml-2">{chef.specialty}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">{chef.bio}</p>

                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Awards & Recognition:</h4>
                          <div className="flex flex-wrap gap-2">
                            {chef.awards.map((award, i) => (
                              <span key={i} className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                                {award}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-orange-400">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm font-medium">Signature: {chef.signature}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Foods Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Signature Dishes</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topFoods.map((food) => (
                <div key={food.id} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-orange-400 font-bold text-lg">{food.price}</span>
                      </div>
                      <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                        {food.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-amber-500/90 text-black text-xs font-semibold rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{food.name}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{food.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {renderStars(Math.floor(food.rating))}
                          <span className="text-white ml-2 font-semibold">{food.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{food.orders}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ChefHat className="w-4 h-4 text-amber-400" />
                          <span className="text-gray-300 text-sm">by {food.chef}</span>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                View Full Menu
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-y border-amber-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Experience Culinary Excellence</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us for an unforgettable dining journey where every dish tells a story of passion,
              innovation, and culinary mastery. Book your table today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg">
                Make Reservation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors">
                View Menu
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;