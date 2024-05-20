import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    
    const handleSmoothScroll = (elementId) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          const { top } = targetElement.getBoundingClientRect();
          window.scrollTo({
            top: top + window.scrollY,
            behavior: 'smooth',
          });
        }
      };

    return (
        <div className=' fixed ' >
            <div className='lg:hidden pt-2  '>
                <button onClick={toggleDropdown}>
                    <h1>Ham</h1>
                </button>
            </div>
            <div className=' font-semibold text-[20px] lg:flex hidden flex-col h-[100vh] w-[5vw]  items-center justify-around  '>
                <button onClick={() => handleSmoothScroll('home')}><div className=' -rotate-90 hover:line-through decoration-secondary decoration-4  ' >Home</div></button>
                <button onClick={() => handleSmoothScroll('project')}><div className=" -rotate-90 hover:line-through decoration-secondary decoration-4  ">Projects</div></button>
                <button onClick={() => handleSmoothScroll('')}><div className=" -rotate-90 hover:line-through decoration-secondary decoration-4  ">About</div></button>
                <button onClick={() => handleSmoothScroll('')}><div className=" -rotate-90 hover:line-through decoration-secondary decoration-4  ">Contact</div></button>
            </div>



            {isDropdownOpen && (
                <div className='w-full h-[100vh] flex flex-col gap-6 pt-4 bg-primary'>
                    <div className='font-semibold text-[20px] flex flex-col h-[100vh] w-screen border    items-center justify-around  '>
                        <button onClick={() => handleSmoothScroll('home')}><div className=' hover:line-through decoration-secondary decoration-4  ' >Home</div></button>
                        <button onClick={() => handleSmoothScroll('project')}><div className=" hover:line-through decoration-secondary decoration-4  ">Projects</div></button>
                        <button onClick={() => handleSmoothScroll('')}><div className=" hover:line-through decoration-secondary decoration-4  ">About</div></button>
                        <button onClick={() => handleSmoothScroll('')}><div className=" hover:line-through decoration-secondary decoration-4  ">Contact</div></button>
                    </div>


                </div>
            )}
        </div>
    )
}

export default Navbar
