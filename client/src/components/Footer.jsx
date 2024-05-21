import React from 'react'
import favicon from '../assets/favicon.png'

function Footer() {
  return (
    <footer className="w-full pt-20">
      <div className="w-full max-w-screen-xl mx-auto md:py-5">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={favicon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Portfolio</span>
          </a>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <ul className="flex justify-between w-[50vw] items-center mb-6 text-sm font-semibold text-black sm:mb-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ayushbhavsar21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayushbhavsarnitrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=ayush21bhavsar@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              Email
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className=" pt-5 block text-sm text-gray-600 sm:text-center">© 2024 <a href="https://ayushbhavsar.netlify.app/" className="hover:underline">Ayush Bhavsar™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer