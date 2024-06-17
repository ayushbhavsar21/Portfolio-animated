import React from 'react'
import TextCarousel from './TextCarousel';
// import Spline from '@splinetool/react-spline';
import '../test/master.css'


function Hero() {

    const texts = ["Student", "Developer", "Designer", "AI-Enthusiastic"];

    return (
        <div className='flex flex-col items-center justify-center w-screen h-[100vh] bg-primary overflow-x-hidden ' id='home' >

            {/* <div className="absolute right-0 top-0 w-[95vw] h-[100vh] border  border-black ">
            <Spline scene="https://prod.spline.design/FNor8kSmrBBUH7C0/scene.splinecode" />
            </div> */}
            <div className="flex flex-col  items-start gap-4 lg:w-[44vw] w-[70vw] z-[10] ">
                <div className='lg:text-[8vh]   text-[5vh] font-serif font-semibold  flex  items-center text-gray-500  lg:h-[8vh] h-[5vh] ' >
                    <div className="rev-block">
                        <span> Ayush Bhavsar &nbsp;</span>
                    </div>
                    <div className="flex items-center  ">
                        <div className='lg:w-[12vw] w-[8vw]  border-2 border-gray-500' >
                        </div>
                    </div>
                </div>
                <div className="lg:text-[8vh]  text-[5vh] font-semibold flex ">Programmer   </div>
                <div className="flex ">
                    <div className='lg:text-[8vh]  text-[5vh] font-normal  text-gray-500 ' > & &nbsp;</div>
                    <div className='lg:text-[8vh]  text-[4vh] font-semibold flex ' ><TextCarousel texts={texts} interval={2000} />  </div></div>
            </div>

        </div>
    )
}

export default Hero
