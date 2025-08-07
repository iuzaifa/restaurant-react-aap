import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Branches from '../components/Branches';
import Testimonials from '../components/Testimonials';
import Dishes from '../components/Dishes';
import HeroSection from '../components/HeroSection';
// import RestaurantDishes from '../components/RestaurantDishes';


const Homepage = () => {
    

    return (
        <>
            <TopBar />
            <Navbar />
            <div className="font-sans">
                <HeroSection />
                {/* <RestaurantDishes/> */}
                <Dishes />
                <Testimonials />
                <Branches /> 
            </div>
            <Footer />
        </>
    );
};

export default Homepage;