import React from 'react'
import HeadingText from '../shared/HeadingText'

import { Skill } from '@/types/types'
import SkillItem from './SkilItem'

const skills:Skill[]=[
    {img:'/images/javascript.png',title:'Javascript'},
    {img:'/images/ts.png',title:'Typescript'},
    {img:'/images/tailwind.png',title:'Tailwind CSS'},
    {img:'/images/react.png',title:'React'},
    {img:'/images/redux.png',title:'Redux Toolkit'},
    {img:'/images/nextjs.svg',title:'Next.js'},
    {img:'/images/Firebase.png',title:'Firebase'},
    {img:'/images/node.png',title:'Node.js'},
    {img:'/images/express.png',title:'Express.js'},
    {img:'/images/mongodb.png',title:'Mongo DB'},
    {img:'/images/mysql.png',title:'MySQL'},
    {img:'/images/prisma.png',title:'Prisma'},
    {img:'/images/git.png',title:'Git'},

]


const Skills = () => {

  return (
    <div className='py-40 bg-[#F7F7F7] text-center '>
        <HeadingText title={'Tech Stacks'} />
        <div className='px-10  xl:px-[200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-12'>
           {skills.map((skill,index)=>{
            return <SkillItem key={index} {...skill} />
           })}
        </div>

    </div>
  )
}

export default Skills
