import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className=' flex overflow-x-hidden bg-primary py-5 ' >
      <Navbar />
      <div className='  lg:ml-[5vw]   ' >
        <Hero />
        <Projects/>
        <About/>
        <Footer/>
      </div>

    </div>
  )
}

export default Home
