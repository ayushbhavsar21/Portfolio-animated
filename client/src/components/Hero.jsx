import React from 'react'
import TextCarousel from './TextCarousel';

function Hero() {

    const texts = ["Student", "Developer", "Designer", "AI-Enthusiastic"];

    return (
        <div className='flex flex-col items-center justify-center w-screen h-[100vh] bg-primary  ' id='home' >
            <div className="flex flex-col items-start lg:w-[44vw]   ">
                <div className='lg:text-[8vh]  text-[5vh] font-serif font-semibold  flex text-gray-500 ' >Ayush Bhavsar &nbsp; <div className="flex items-center  "> <div className='w-[12vw]  border-2 border-gray-500' > </div>  </div>  </div>
                <div className="lg:text-[8vh]  text-[5vh] font-semibold flex ">Programmer   </div>
                <div className="flex ">
                    <div className='lg:text-[8vh]  text-[5vh] font-normal  text-gray-500 ' > & &nbsp;</div>
                    <div className='lg:text-[8vh]  text-[5vh] font-semibold flex ' ><TextCarousel texts={texts} interval={2000} />  </div></div>
            </div>

        </div>
    )
}

export default Hero
