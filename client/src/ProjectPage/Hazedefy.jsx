import React from 'react'
import Navbar from '../components/Navbar'
import bg from '../assets/bg.jpg'
import pic1 from '../assets/hazedefy-pic1.png'
import pic2 from '../assets/hazedefy-pic2.png'
import Footer from '../components/Footer'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import deewakar from '../assets/deewakar.jpeg'
import avi from '../assets/avi.jpeg'
import satya from '../assets/satya.jpeg'
import ayush from '../assets/ayush.jpeg'

function Hazedefy() {
    return (
        <div className=" " style={{ backgroundImage: `url(${bg})` ,backgroundAttachment: `fixed` , backgroundRepeat: `no-repeat`,backgroundSize: `cover` }}>
            <div className=' flex overflow-x-hidden  py-5 bg-[#f2f2f2e6] bg-cover bg-center  '   >
                <Navbar />
                {/* Everything inside this div for navbar alignment */}
                <div className='ml-[5vw]   ' >

                    {/* Project Description */}
                    <div className="w-screen h-[100vh]  flex items-center ">
                        <div className='w-[50vw]  flex flex-col items-start '>
                            <div className="w-[50vw] pl-20 pt-2  flex flex-col  gap-5 ">
                                <div className="text-[5vh] font-semibold font-serif ">Hazedefy: See Clearly Through Any Haze </div>
                                <div className="text-gray-500 text-[3vh] font-medium "> Hazedefy is a cutting-edge Dehaze as a Service platform that uses advanced algorithms to remove haze, fog, and other obstacles from images and videos in real-time.  This improves clarity and unlocks new possibilities in areas like transportation, surveillance, and computer vision.
                                </div>
                                <a className='h-[7vh] w-[15vw]  hover:scale-105  text-gray-500 text-[3vh] font-medium  hover:text-secondary flex justify-center items-center  ' href="https://hazedefy.netlify.app/">
                                    <div className=" ">View Website &nbsp; --&gt; </div>
                                </a><a className='h-[7vh] w-[15vw]  hover:scale-105   text-gray-500 text-[3vh] font-medium  hover:text-secondary flex justify-center items-center  ' href="https://github.com/ayushbhavsar21/Hazedefy">
                                    <div className=" ">Github Repo &nbsp; --&gt; </div>
                                </a>

                            </div>
                        </div>
                        <div className="w-[50vw]  pt-2 gap-7 text-gray-500 text-[3vh] font-medium   flex flex-col items-center justify-center  ">
                            <div className="border-b-2 w-[30vw] border-gray-500 ">Deep Learning</div>
                            <div className="border-b-2 w-[30vw] border-gray-500 ">Frontend Development</div>
                            <div className="border-b-2 w-[30vw] border-gray-500 ">Backend Development</div>
                            <div className="border-b-2 w-[30vw] border-gray-500 ">OpenCV</div>
                            <div className="border-b-2 w-[30vw] border-gray-500 ">Python-Flask</div>


                        </div>
                    </div>

                    {/* Images  */}
                    <div className="w-screen flex flex-col gap-10 items-center justify-center ">
                        <img className='w-[70vw] drop-shadow-[10px_50px_55px_rgba(0,0,0,0.5)]' src={pic1} alt="" />
                        <img className='w-[70vw] drop-shadow-[10px_50px_55px_rgba(0,0,0,0.5)] ' src={pic2} alt="" />

                    </div>

                    {/* Key Features of project */}

                    <div className='w-screen pt-[10vh]  flex flex-col items-start '>
                        <div className=" pl-20 pt-2  flex flex-col pr-[8vw] gap-5 ">
                            <div className="text-[4vh] font-semibold font-serif ">Key Features:</div>
                            <div className="text-gray-500 text-[3vh] font-medium  "> <div className="font-bold text-black ">• Image Dehaze:</div> The platform can process static images, removing haze and enhancing details to produce clear and vibrant visuals.
                            </div>
                            <div className="text-gray-500 text-[3vh] font-medium  "> <div className="font-bold text-black ">• Video Dehaze:</div> Hazedefy extends its capabilities to video content, allowing for real-time dehazing of moving images, crucial for applications such as surveillance, monitoring, and analysis.
                            </div>
                            <div className="text-gray-500 text-[3vh] font-medium  "> <div className="font-bold text-black ">• Real-time Dehaze: </div> A standout feature of the platform is its ability to dehaze visual data in real-time, making it suitable for applications that require instant clarity, such as live feeds from cameras and drones.
                            </div>
                            <div className="text-gray-500 text-[3vh] font-medium  "> <div className="font-bold text-black ">• Interactive UI and Responsive Design: </div> Hazedefy boasts a cutting-edge user interface that is both visually appealing and highly intuitive. The responsive design ensures that users have a seamless experience across all devices, whether accessing the platform on a desktop, tablet, or smartphone.
                            </div>


                        </div>
                    </div>

                    {/* Use Cases */}

                    <div class="w-screen pt-[10vh] flex flex-col items-start">
                        <div class="pl-20 pt-2 flex flex-col pr-[8vw] gap-5">


                            <div class="text-[4vh] font-semibold font-serif">Use Cases:</div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Fire Safety:</div>
                                In firefighting operations, clear visibility is paramount. Hazedefy can enhance live footage from fire scenes, aiding firefighters in navigation and decision-making.
                            </div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Satellite Image Clearing:</div>
                                Satellite imagery often suffers from atmospheric interference. Hazedefy can improve the clarity of satellite images, benefiting sectors like agriculture, urban planning, and environmental monitoring.
                            </div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Marine Study:</div>
                                Clearing haze from marine imagery helps researchers study oceanic phenomena, monitor marine life, and enhance navigation safety for ships and vessels.
                            </div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Military and Defense:</div>
                                Military applications benefit from enhanced visual clarity for surveillance, reconnaissance, and situational awareness, making Hazedefy a valuable asset in defense operations.
                            </div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Traffic Management:</div>
                                Clearer visuals of traffic conditions enable better traffic management, leading to improved safety, reduced congestion, and optimized transportation systems.
                            </div>

                            <div class="text-gray-500 text-[3vh] font-medium">
                                <div class="font-bold text-black ">• Air Quality:</div>
                                Monitors and analyzes air quality by providing clearer images of pollution sources, aiding in pollution control and environmental protection efforts.
                            </div>

                        </div>
                    </div>


                    {/* team */}

                    <section className="text-gray-600 body-font pl-20  ">
                        <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center ">
                            <div className='flex justify-center items-center flex-col font-serif mb-16 text-center'>
                                <div>
                                    <p className='sm:text-2xl text-xl text-gray-700 text-center'>Our Team</p>
                                    <hr className='border-gray-400 mt-2 w-[300px]' />
                                </div>
                                <p className='text-[5vh] font-semibold font-serif text-black'>Hands Behind Everything</p>
                            </div>
                            <div className="flex flex-wrap w-[90%] ">
                                <div className="p-4 lg:w-1/2">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={ayush} />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Ayush Bhavsar</h2>
                                            <h3 className="text-gray-500 mb-3">Frontend and AI-ML Developer</h3>
                                            {/* <p className="mb-4">Innovative AIML Developer skilled in crafting intelligent solutions using Artificial Intelligence and Machine Learning algorithms for diverse applications.</p> */}

                                            <span className="inline-flex">
                                                <a className="text-gray-500" href='https://www.linkedin.com/in/ayushbhavsarnitrr/'>
                                                    <img src={linkedin} alt="" className='w-[35px]' />
                                                </a>
                                                <a className="text-gray-500" href='https://github.com/ayushbhavsar21'>
                                                    <img src={github} alt="" className='w-[35px]' />

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4  lg:w-1/2">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={deewakar} />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">B Deewakar Rao</h2>
                                            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
                                            {/* <p className="mb-4">Experienced Full Stack MERN Developer adept at creating dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js</p> */}
                                            <span className="inline-flex">
                                                <a className="text-gray-500" href='https://www.linkedin.com/in/b-deewakar-rao-960438280/'>
                                                    <img src={linkedin} alt="" className='w-[35px]' />
                                                </a>
                                                <a className="text-gray-500" href='https://github.com/deewakar28'>
                                                    <img src={github} alt="" className='w-[35px]' />

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={avi} />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Aviral Patel</h2>
                                            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
                                            {/* <p className="mb-4">Skilled Full Stack MERN Developer proficient in MongoDB, Express.js, React, and Node.js for comprehensive web development solutions</p> */}
                                            <span className="inline-flex">
                                                <a className="text-gray-500" href='https://www.linkedin.com/in/aviralpatel/'>
                                                    <img src={linkedin} alt="" className='w-[35px]' />
                                                </a>
                                                <a className="text-gray-500" href='https://github.com/AviralPatel0526'>
                                                    <img src={github} alt="" className='w-[35px]' />

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-1/2">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={satya} />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">Satya Prakash Jena</h2>
                                            <h3 className="text-gray-500 mb-3">Blockchain Developer</h3>
                                            {/* <p className="mb-4">Experienced Blockchain Developer proficient in creating secure, decentralized solutions using distributed ledger technology for various industries and use cases.</p> */}
                                            <span className="inline-flex">
                                                <a className="text-gray-500" href='https://www.linkedin.com/in/satya-prakash-jena-37a14524a/'>
                                                    <img src={linkedin} alt="" className='w-[35px]' />
                                                </a>
                                                <a className="text-gray-500" href='https://github.com/Satya22-26'>
                                                    <img src={github} alt="" className='w-[35px]' />

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Additional team members can be added similarly */}
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>

            </div>
        </div>


    )
}

export default Hazedefy
