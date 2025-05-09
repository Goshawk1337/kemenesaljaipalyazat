"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button";  
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className=" ">
      <div className="w-[75vw] flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-3xl md:text-[2rem] font-bold whitespace-nowrap text-neutral-100">Kemenesalja</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"} 
          onClick={toggleMenu} 
        >
          <span className="sr-only">Navbar</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${ isOpen ? "block" : "hidden" } w-full md:block md:w-auto`}  
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 text-neutral-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <Link href={"/"} className="block py-2 px-3 text-neutral-100 rounded-sm md:bg-transparent hover:text-neutral-400 md:p-0 transition-all duration-300">Főoldal</Link>
            </li>
            <li>
            <Link href={"/kornyek"} className="block py-2 px-3 text-neutral-100 rounded-sm md:bg-transparent hover:text-neutral-400 md:p-0 transition-all duration-300">Kemenesalja bemutatása</Link>
            </li>
            <li>
            <Link href={"/hiresek"} className="block py-2 px-3 text-neutral-100 rounded-sm md:bg-transparent hover:text-neutral-400 md:p-0 transition-all duration-300"> Híres személyek</Link>

     
            </li>
            {/* <li>
          
            <Link href="{}" className="block py-2 px-3 text-neutral-100 rounded-sm md:bg-transparent hover:text-neutral-400 md:p-0 transition-all duration-300"> Helyi nevezetéssegek</Link>

 
            </li> */}
            {/* <li>
              <a href="#" className="block py-2 px-3 text-neutral-100 rounded-sm md:bg-transparent hover:text-neutral-700 md:p-0 transition-all duration-300">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
