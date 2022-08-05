import React from 'react';

const ProjectCard = ({item, image}) => {
    return (
        <a href={item.link} className='transform transition duration-500 hover:scale-110 w-10/12 2xl:w-11/12 xl:w-11/12 lg:w-full block ml-auto mr-auto self-center rounded-xl shadow-lg drop-shadow-md px-4 sm:p-0 py-5 xl:px-8 flex flex-col place-items-center gap-4 text-center md:w-3/4 sm:w-full'>
            <div className='h-72 w-full relative'>
                <img className='flex-1 w-full h-full object-cover rounded-xl' src={image} alt="" />
            </div>
            <span className='text-slate-500'>{item.type}</span>
            <h3 className='font-bold text-xl pt-4 pb-2'>{item.title}</h3>
            <p className='text-center text-lg pb-4'>{item.description}</p>
            <div className={`flex gap-3 flex-wrap justify-center pb-10`}>
                {item.languages.map((item, index) => {
                    return(
                        <p key={index} className='bg-icon p-2 rounded-md'>{item}</p>
                    )
                })}
            </div>
        </a>
    );
}

export default ProjectCard;
