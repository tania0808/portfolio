import React from 'react'
import data from '../data/projects.json';
import todo from '../images/todo.png'
import groupomania from '../images/groupomania.png'
import hotTakes from '../images/Hot-takes.png'
import ohmyfood from '../images/ohmyfood.png'
import booki from '../images/booki.png'
import ProjectCard from './ProjectCard';

export default function Projects() {
  const images  = [
    { alt: "booki page", src: booki},
    { alt: "ohmyfood page", src: ohmyfood},
    { alt: "hot takes page", src: hotTakes},
    { alt: "groupomania page", src: groupomania},
    { alt: "todo app", src: todo},
  ];
  return (
    <section id='projects' className='px-10 md:px-8 sm:p-2 py-20'>
      <h1 className='text-header font-black text-5xl text-center'>Projects</h1>
      <div className={`grid grid-cols-2 align-center-middle pt-20 gap-14 md:grid-cols-1 place-items-center">`}>
          {data.map((item, index) => {
              return(
                <ProjectCard key={index} item={item} image={images[index].src}/>
              )
          })}
      </div>
    </section>
  )
}