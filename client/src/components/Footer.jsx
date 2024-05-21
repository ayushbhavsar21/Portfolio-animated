import React from 'react'
import favicon from '../assets/favicon.png'
function Footer() {
    return (



        <footer class="   w-full pt-20 ">
            <div class="w-full max-w-screen-xl mx-auto  md:py-5">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={favicon} class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap  text-gray-900">Portfolio</span>
                    </a>

                </div>
                <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <ul class="flex justify-between w-[50vw] items-center mb-6 text-sm  font-semibold text-black sm:mb-0 ">
                    <li>
                        <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/ayushbhavsar21" class="hover:underline me-4 md:me-6">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ayushbhavsarnitrr/" class="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:ayush21bhavsar@gmail.com" class="hover:underline me-4 md:me-6">Email</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
                {/* <span class="block text-sm text-gray-600 sm:text-center">© 2024 <a href="/" class="hover:underline">Portfolio™</a>. All Rights Reserved.</span> */}
            </div>
        </footer>


    )
}

export default Footer