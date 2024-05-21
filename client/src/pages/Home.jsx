import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'

function Home() {
  return (
    <div className=' flex overflow-x-hidden bg-primary py-5 ' >
      <Navbar />
      <div className='ml-[5vw]   ' >
        <Hero />
        <Projects/>
        <About/>


      </div>

    </div>
  )
}

export default Home
