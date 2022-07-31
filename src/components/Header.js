import React from 'react'
import { useState } from 'react';

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`${isNavOpen ? 'h-fit' : 'h-20 sm:h-16' } transition-all ease-linear duration-600 flex md:flex-col justify-end`}>
        <div className="HAMBURGER-ICON space-y-2 flex justify-end md:block hidden absolute top-6 right-10">
            <button className='flex justify-end'>
                { !isNavOpen
                ? <FontAwesomeIcon className='text-2xl w-[32px]' icon={faBars} onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}/>
                : <FontAwesomeIcon className='text-2xl w-[32px]' icon={faXmark} onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}/>
                }
            </button>
        </div>
        <ul className={`${isNavOpen ? 'opacity-100' : 'md:opacity-0 md:-translate-y-24'} w-full container mx-auto px-24 my-6 lg:py-0 transition-all ease-linear duration-600 md:flex-col flex justify-end  text-xl items-center gap-6`}>
            <li>
                <a href="#skill-set">
                    <span>Skills</span>
                </a>
            </li>
            <li>
                <a href="#projects">
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a href="#contact-me">
                    <span>Contact</span>
                </a>
            </li>
            <button className='bg-primary text-white rounded-full py-1.5 px-4'>Contact</button>
        </ul>
    </header>
  )
}
