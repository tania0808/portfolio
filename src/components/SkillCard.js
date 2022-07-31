import React from 'react'

export default function SkillCard({icon, data}) {
  return (
    <div className='rounded-xl shadow-lg drop-shadow-md px-24 py-5 xl:px-8 flex flex-col place-items-center gap-4 text-center md:w-3/4 sm:w-full'>
        <div className='text-3xl bg-icon w-14 h-14 rounded-full grid place-content-center '>{icon}</div>
        <h3 className='font-bold text-xl pt-4'>{data.title}</h3>
        <p className='text-center text-lg'>{data.content.join(', ')}</p>
    </div>
  )
}
