import React from 'react'
import { FaGithub } from "react-icons/fa";

type Props = {
    title:string;
    tags:string[];
    link:string;
}

const ProjectItem = ({title,tags,link}: Props) => {
  return (
    <div className='w-full flex items-center gap-x-3 cursor-pointer transition-all ease-in-out delay-150  border rounded-xl py-4 px-4 sm:px-6  bg-white text-slate-900 hover:bg-black hover:text-white'>
       <FaGithub size={32} />
        <div className='text-left'>
        <h1 className='text-lg sm:text-xl font-[500] '>{title}</h1>
        <p>
            {tags.map((item,index)=>{
                return <span className='text-sm' key={index}>{item} {index!=tags.length-1 ? ',' :'' }</span>
            })}
        </p>
        </div>
    </div>
  )
}

export default ProjectItem