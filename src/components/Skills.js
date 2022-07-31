import React from 'react'
import data from '../data/skills.json'
import SkillCard from './SkillCard'
import { FaDatabase, FaReact, FaNode } from 'react-icons/fa';


export default function Skills() {
  
    const toolItems  = [
        { label: "Front", icon: <FaReact/> },
        { label: "Back", icon: <FaNode /> },
        { label: "Database", icon: <FaDatabase /> }
      ];

    return (
        <section className='px-10 md:px-8 py-20'>
            <h1 className='text-header font-black text-5xl text-center'>Skills & Toolset</h1>
            <div className={`grid grid-cols-${toolItems.length} pt-20 gap-14 md:grid-cols-1  md:place-items-center`}>
                {data.map((item, value) => {
                    return(
                        <SkillCard key={value} icon={toolItems[value].icon} data={item}/>
                    )
                })}
            </div>
        </section>
    )
}
