import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk  } from 'react-icons/fa';
import personPhoto from '../images/IMG_4313.jpg'

export default function About() {
  return (
    <section className="bg-desktopPattern bg-cover w-full flex flex-row md:flex-col container mx-auto px-10 md:px-8 py-8">
        <div className='flex flex-col flex-1 gap-10 justify-center px-10 sm:pl-0  md:pb-8'>
            <span className='text-neutral-500 text-lg font-semibold'>Junior Front-End Developer</span>
            <h1 className='text-header font-black text-5xl'>I'm Tania</h1>
            <p className='w-3/4 md:w-full font-semibold text-justify text-lg'>I have recently completed the Web Development Course on OpenClassrooms Platform. I'm based in Paris and now I'm searching my first job in this field</p>
            <div className='flex gap-4 text-3xl text-primary w-3/4 md:w-full justify-around'>
                <a href="https://github.com/tania0808" className='hover:text-gen transition ease-linear hover:scale-125'>
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/tetiana-his/" className='hover:text-gen transition ease-linear hover:scale-125'>
                    <FaLinkedin/>
                </a>
                <a href="mailto:tania08082000@gmail.com" className='hover:text-gen transition ease-linear hover:scale-125'>
                    <FaMailBulk/>
                </a>
            </div>
        </div>
        <div className=' h-[500px] flex-1 flex justify-center align-items-center my-auto md:mt-4 '>
            <img className='md:w-8/12 sm:w-full max-w-full h-auto md:mt-4 md:rounded-lg' src={personPhoto} alt="avatar"/>
        </div>
    </section>
  )
}
