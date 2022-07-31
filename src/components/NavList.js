import React from 'react'

export default function NavList({className}) {
  return (
    <ul className={className}>
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
            <button className='bg-primary text-white rounded-full py-1.5 px-4'>Contact</button>
            </a>
        </li>
    </ul>
  )
}
