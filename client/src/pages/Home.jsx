import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

function Home() {
  return (
    <div className=' flex overflow-x-hidden bg-primary py-5 ' >
      <Navbar />
      <div className='ml-[5vw]   ' >
        <Hero />
        <Projects/>


      </div>

    </div>
  )
}

export default Home
