import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/hero'
import { Routes, Route } from 'react-router-dom'
import Shopping from './pages/Shopping'

const App = () => {
  return (
    <main className='w-full'>
      {/* Navbar stays centered with max width */}
      <div className='max-w-7xl mx-auto'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </main>
  )
}

export default App
