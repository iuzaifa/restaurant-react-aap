import { useState } from 'react'
import Homepage from './pages/Homepage'
import Menu from './pages/Menu'
import About from './pages/About'
import Reservation from './pages/Reservation'
import Events from './pages/Events'
import Contacts from './pages/Contacts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
