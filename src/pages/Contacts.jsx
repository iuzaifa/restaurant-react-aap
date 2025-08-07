import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddressComponent from '../components/AddressComponent'
import ContactForm from '../components/ContactFrom'
import Breadcrumb from '../components/BreadCrumb'
import TopBar from '../components/TopBar';

const Contacts = () => {
  return (
    <>
      <TopBar />
      <Navbar/>
      <Breadcrumb currentPage="Contact Us" moverUrl="/" />
      <AddressComponent />
      <ContactForm/>
      <Footer />
    </>
  )
}

export default Contacts