import React, { useEffect } from 'react';
import NIT from '../assets/NIT.png'
import pic from '../assets/Myself.jpg'
import AOS from 'aos';

function About() {

    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: true, // Only animate once
        });
      }, []);

    return (
        <div>
            <div className='lg:text-[8vh]  text-[4vh] lg:px-20 h-[20vh] pb-10 justify-center flex items-center text-gray-500 font-serif ' id='project' >
                <div className="flex items-center  "> <div className='md:w-[25vw] w-[18vw]  border-2 border-gray-500' > </div>  </div>
                <div className='flex  ' > <div> &nbsp; • &nbsp;</div><div>  About </div> <div className='' > &nbsp; • &nbsp;</div></div>
                <div className="flex items-center  "> <div className='md:w-[25vw] w-[18vw] border-2 border-gray-500' > </div>  </div>
            </div>
            <div className='w-[93%]   gap-10 lg:flex lg:flex-row flex flex-col-reverse ' >
                <div className="lg:w-[55%] w-[100%]  pl-8 lg:pl-20 pt-10  ">
                    <div className="flex flex-col gap-10 ">
                        <div className="   text-gray-500 lg:text-[3vh] text-[2.5vh] font-medium  ">
                            &nbsp; &nbsp; &nbsp; I am Ayush Bhavsar, an undergraduate student pursuing a degree in Information Technology at the prestigious National Institute of Technology, Raipur. With a keen interest in technology, I have developed proficiency in several programming languages, including C++, Python, and JavaScript.
                        </div>
                        <div className="   text-gray-500 lg:text-[3vh] text-[2.5vh] font-medium  ">
                            &nbsp; &nbsp; &nbsp; My expertise extends beyond coding, as I have also delved into the realm of web development. I am well-versed in React, HTML, and CSS, enabling me to create dynamic and visually appealing websites and user interfaces. Additionally, I have embarked on the exciting journey of machine learning, continuously expanding my knowledge and staying up-to-date with the latest advancements in this rapidly evolving field.
                        </div>
                        {/* <div className="   text-gray-500 text-[3vh] font-medium  ">
                            &nbsp; &nbsp; &nbsp; With a strong foundation in programming, web development, and a growing understanding of machine learning, I am well-equipped to tackle complex problems and contribute innovative solutions. My passion for technology and my commitment to continuous learning position me as a promising talent in the ever-changing landscape of information technology.
                        </div> */}
                    </div>
                    <div className="flex flex-col pt-10 gap-5  ">
                        <div className="  text-black lg:text-[3vh] text-[2.5vh] font-serif font-semibold "> Education: </div>
                        <div className="flex">
                            <img className='h-[12vh] pt-2 pb-2  ' src={NIT} alt="" />
                            <div className=" flex flex-col  ">
                                <a href="https://www.nitrr.ac.in/" className=" text-gray-500 lg:text-[3vh] text-[2.5vh] font-serif font-medium">National Institute Of Technology, Raipur </a>
                                <div className=" text-gray-500 lg:text-[2.5vh] text-[2vh] font-serif font-medium">Bachelor of Technology , Information Technology </div>
                                <div className="text-gray-500 lg:text-[2.5vh] text-[2vh] font-serif font-medium ">Batch : 2026 </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-10 gap-5   ">
                        <div className="  text-black lg:text-[3vh] text-[2.5vh] font-serif font-semibold "> Skills: </div>
                        <div className=" flex flex-col pl-8 ">
                            <ul style={{ listStyleType: 'disc' }} >
                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap ">Languages: &nbsp; <div className=' ' > C/C++, Python (Basic).</div> </div></li>

                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap">Web: &nbsp; <div className=' ' >HTML, CSS, Tailwind, Javascript, React.js .</div> </div></li>

                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap "> Utilities: &nbsp; <div className=' ' >  Git , Canva , Figma, Spline .</div> </div></li>

                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap ">AIML: &nbsp; <div className=' ' > Python , NumPy , Pandas ,Supervised learning.</div> </div></li>

                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap">CS Fundamentals: &nbsp; <div className=' ' > Data Structures, Algorithm , OOPS</div> </div></li>

                                <li><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex flex-wrap ">Soft Skills: &nbsp; <div className=' ' >  Leadership, Event Management, Designing, Sports.</div> </div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col pt-10 gap-5  ">
                        <div className="  text-black lg:text-[3vh] text-[2.5vh] font-serif font-semibold "> Achievements: </div>
                        <div className=" flex flex-col pl-8 ">
                            <ul style={{ listStyleType: 'disc' }} >
                                <li ><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex ">Won CodeUtsav 7.0 Central India's Largest Hackathon.  </div></li>
                                <li ><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex ">Finalist at Build for Bharat Hackathon (ONDC) </div></li>
                                <li ><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex ">Secured victory in Hack-O-Harbour (IIIT Naya Raipur) </div> </li>
                                <li ><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex "> CodeChef Starters 109 Div4 Global Rank: 692 </div> </li>
                                <li ><div className=" text-gray-500 text-[2.5vh] font-serif font-medium flex ">Participated in 5+ Hackathons </div> </li>
                            </ul>
                        </div>
                    </div>





                </div>
                <div className="lg:w-[45%] w-[100%] lg:pl-0 place-items-center  justify-center pl-8  flex flex-col ">
                    <div className="h-0 w-[100%] lg:h-[45vh]"></div>
                    <div className='w-[100%] lg:h-[90vh] h-[60vh]  lg:pr-10 ' >
                        <img data-aos="fade-right" className='rounded-br-3xl rounded-bl-[8vw] rounded-tl-3xl' src={pic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
