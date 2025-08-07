import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import RestaurantDishes from '../components/RestaurantDishes'
import Footer from '../components/Footer'

const Menu = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <RestaurantDishes />
      <Footer />
    </>
  )
}

export default Menu