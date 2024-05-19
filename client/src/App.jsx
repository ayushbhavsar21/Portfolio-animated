import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className=' flex overflow-hidden bg-primary ' >
      <Navbar />
      <div className='ml-[5vw] bg-black  ' >
        <Hero />

      </div>

    </div>
  )
}

export default App
