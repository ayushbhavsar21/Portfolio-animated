import React, { useEffect } from 'react';
import icon from '../assets/icon.svg'
import Spline from '@splinetool/react-spline';
import AOS from 'aos';

function Projects() {

    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({
          duration: 3000, // Animation duration in milliseconds
          once: false, // Only animate once
        });
      }, []);

    return (
        <div className='' >
            
            <div className='lg:text-[8vh]  text-[4vh] px-20 h-[20vh] pb-10  flex items-center text-gray-500 font-serif ' id='project' >
                <div className="flex items-center  "> <div className='w-[30vw]  border-2 border-gray-500' > </div>  </div>
                <div>&nbsp; • &nbsp; Projects &nbsp; • &nbsp;</div>
                <div className="flex items-center  "> <div className='w-[30vw]  border-2 border-gray-500' > </div>  </div>
            </div>
            <div className="w-screen flex flex-col gap-[15vh] ">
            <div data-aos="fade-out" className="w-screen h-[70vh]  flex items-center ">
                <div className='w-[50vw] h-[35vh]  flex flex-col items-start '>
                    <div className="w-[50vw] h-[5vh] pl-20 items-center  flex gap-5 ">
                        <img className='h-[5vh]  ' src={icon} alt="" />
                        <div className="font-semibold text-[3vh]  ">01</div>
                    </div>
                    <div className="w-[50vw] h-[30vh] pl-20 pt-2  flex flex-col  gap-5 ">
                        <div className="text-[5vh] font-semibold font-serif ">Hazedefy </div>
                        <div className="text-gray-500 text-[3vh] font-medium "> A Dehaze as Service platfrom which facilitates images , video and real-time dehazing... </div>
                        <a className='h-[7vh] w-[15vw] bg-black rounded-br-3xl hover:scale-105 text-[3vh] font-serif text-white hover:text-secondary flex justify-center items-center  ' href="">
                            <div className=" ">View project &nbsp;  &gt; </div>
                        </a>

                    </div>
                </div>
                <div className="w-[50vw] h-[70vh]   flex justify-center items-center drop-shadow-[10px_50px_55px_rgba(0,0,0,0.5)] ">
                    <div className='  h-[70vh] w-[50vw]  flex  ' >
                <Spline className=' ' style={{
                    height : '70vh',
                    width :  '50vw' ,                   

                }} 
                scene="https://prod.spline.design/qc2tj3T7lPHcVOzK/scene.splinecode" /></div>
                
                </div>
            </div>
            <div data-aos="fade-out" className="w-screen h-[70vh]  flex items-center ">
            <div className="w-[50vw] h-[70vh]   flex justify-center items-center drop-shadow-[10px_50px_55px_rgba(0,0,0,0.5)] ">
                    <div className='  h-[70vh] w-[50vw]  flex  ' >
                <Spline className=' ' style={{
                    height : '70vh',
                    width :  '50vw' ,                   

                }} 
                scene="https://prod.spline.design/qc2tj3T7lPHcVOzK/scene.splinecode" /></div>
                
                </div>
                <div className='w-[50vw] h-[35vh]  flex flex-col items-start '>
                    <div className="w-[50vw] h-[5vh] pl-20 items-center  flex gap-5 ">
                        <img className='h-[5vh]  ' src={icon} alt="" />
                        <div className="font-semibold text-[3vh]  ">02</div>
                    </div>
                    <div className="w-[50vw] h-[30vh] pl-20 pt-2  flex flex-col  gap-5 ">
                        <div className="text-[5vh] font-semibold font-serif ">Jadoo </div>
                        <div className="text-gray-500 text-[3vh] font-medium ">A Housing website with AR/VR view of rooms for better understanding of property... </div>
                        <a className='h-[7vh] w-[15vw] bg-black rounded-br-3xl hover:scale-105 text-[3vh] font-serif text-white hover:text-secondary flex justify-center items-center  ' href="">
                            <div className=" ">View project &nbsp;  &gt; </div>
                        </a>

                    </div>
                </div>
               
            </div>
            <div data-aos="fade-out" className="w-screen h-[70vh]  flex items-center ">
                <div className='w-[50vw] h-[35vh]  flex flex-col items-start '>
                    <div className="w-[50vw] h-[5vh] pl-20 items-center  flex gap-5 ">
                        <img className='h-[5vh]  ' src={icon} alt="" />
                        <div className="font-semibold text-[3vh]  ">03</div>
                    </div>
                    <div className="w-[50vw] h-[30vh] pl-20 pt-2  flex flex-col  gap-5 ">
                        <div className="text-[5vh] font-semibold font-serif ">GuriJi </div>
                        <div className="text-gray-500 text-[3vh] font-medium "> A platform to help educators and students in better online education... </div>
                        <a className='h-[7vh] w-[15vw] bg-black rounded-br-3xl hover:scale-105 text-[3vh] font-serif text-white hover:text-secondary flex justify-center items-center  ' href="">
                            <div className=" ">View project &nbsp;  &gt; </div>
                        </a>

                    </div>
                </div>
                <div className="w-[50vw] h-[70vh]   flex justify-center items-center drop-shadow-[10px_50px_55px_rgba(0,0,0,0.5)] ">
                    <div className='  h-[70vh] w-[50vw]  flex  ' >
                <Spline className=' ' style={{
                    height : '70vh',
                    width :  '50vw' ,                   

                }} 
                scene="https://prod.spline.design/qc2tj3T7lPHcVOzK/scene.splinecode" /></div>
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects


