import React from 'react'
import TextCarousel from './TextCarousel';

function Hero() {

    const texts = ["Student", "Developer", "Designer", "AI-Enthusiastic"];

    return (
        <div className='flex flex-col items-center justify-center w-screen h-[100vh] bg-primary  '>
            <div className="flex flex-col items-start lg:w-[40vw]   ">
                <div className='lg:text-[8vh]  text-[4vh]  flex text-gray-500 ' >Ayush Bhavsar &nbsp; <div className="flex items-center  "> <div className='w-[12vw]  border-b border-gray-500' > </div>  </div>  </div>
                <div className="lg:text-[8vh]  text-[4vh] font-semibold flex ">Programmer   </div>
                <div className="flex ">
                    <div className='lg:text-[8vh]  text-[4vh] font-normal  text-gray-500 ' > & &nbsp;</div>
                    <div className='lg:text-[8vh]  text-[4vh] font-semibold flex ' ><TextCarousel texts={texts} interval={2000} />  </div></div>
            </div>

        </div>
    )
}

export default Hero
