import React from 'react'
import HeadingText from '../shared/HeadingText'
import ProjectItem from './ProjectItem'
import CustomButton from '../shared/CustomButton'

const projects=[
    {title:'Next Blog',tags:['Next.js, Typescript, Tailwind CSS'],link:'https://github.com/MayThinKyi/nextjs-blog'},
    {title:'EvoGym Landing Page',tags:['React, Typescript, Tailwind CSS'],link:'/https://github.com/MayThinKyi/ts-landing-page'},
    {title:'Home Rental',tags:['React, Node, Express, MongoDB,  Tailwind CSS'],link:'https://github.com/MayThinKyi/home-rental-mern'},
    {title:'MERN Ecommerce',tags:['React, Node, Express, MongoDB,  Tailwind CSS'],link:'https://github.com/MayThinKyi/mern-ecommerce'},
    {title:'Media App',tags:['React, Node, Express, MySQL,  Tailwind CSS'],link:'https://github.com/MayThinKyi/mern-social-lite'},
    {title:'Chat App',tags:['React, Firebase ,  Tailwind CSS'],link:'https://github.com/MayThinKyi/fire-chat-with-react'},
    {title:'React Fitness App',tags:['React, Tailwind CSS'],link:'https://github.com/MayThinKyi/React-fitness-app'},
    {title:'React Music Player',tags:['React, Firebase ,  Tailwind CSS'],link:'https://github.com/MayThinKyi/react-music-player'},

]

const Projects = () => {
  return (
    <div className='py-40 bg-[#F7EFF3] text-center '>
      <HeadingText title='My Projects' />
      <div className='mb-16 mx-auto  px-5 sm:px-10 md:px-[100px] xl:px-[250px] grid  grid-cols-1 md:grid-cols-2 gap-10 '>
        {projects.map((item,index)=>{
            return <ProjectItem key={index} {...item} />
        })}
      </div>
      <CustomButton title='Check my Github for other Projects 🌞' />
    </div>
  )
}

export default Projects
