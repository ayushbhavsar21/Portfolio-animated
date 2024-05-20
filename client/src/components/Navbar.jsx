import React, { useState } from 'react';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className=' fixed ' >
            <div className='lg:hidden pt-2  '>
                <button onClick={toggleDropdown}>
                    <h1>Ham</h1>
                </button>
            </div>
            <div className=' font-semibold text-[20px] lg:flex hidden flex-col h-[100vh] w-[5vw]  items-center justify-around  '>
                <a href=""><div className='rotate-90 hover:line-through decoration-secondary decoration-4  ' >Home</div></a>
                <a href="#project"><div className="rotate-90 hover:line-through decoration-secondary decoration-4  ">Projects</div></a>
                <a href=""><div className="rotate-90 hover:line-through decoration-secondary decoration-4  ">About</div></a>
                <a href=""><div className="rotate-90 hover:line-through decoration-secondary decoration-4  ">Contact</div></a>
            </div>



            {isDropdownOpen && (
                <div className='w-full h-[100vh] flex flex-col gap-6 pt-4 bg-primary'>
                    <div className='font-semibold text-[20px] flex flex-col h-[100vh] w-screen border    items-center justify-around  '>
                        <a href=""><div className=' hover:line-through decoration-secondary decoration-4  ' >Home</div></a>
                        <a href="#project"><div className=" hover:line-through decoration-secondary decoration-4  ">Projects</div></a>
                        <a href=""><div className=" hover:line-through decoration-secondary decoration-4  ">About</div></a>
                        <a href=""><div className=" hover:line-through decoration-secondary decoration-4  ">Contact</div></a>
                    </div>


                </div>
            )}
        </div>
    )
}

export default Navbar
