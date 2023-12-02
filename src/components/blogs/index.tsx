import React from 'react'
import HeadingText from '../shared/HeadingText'
import BlogItem from './BlogItem'

import { Blog } from '@/types/types'
const blogs:Blog[]=[
    {title:'2023 Review 🌞',link:'/',date:'31 May, 2023'},
    {title:'Tech Stack I want to try',link:'/',date:'31 May, 2023'},
    {title:'👋🏻 Hello World',link:'/',date:'31 May, 2023'}
]

const Blogs = () => {
  return (
    <div className='px-5 sm:px-10 pt-20 pb-40 md:py-40 text-center mb-20 '>
      <HeadingText title={'My Blogs'} />
      <div className='mt-4 sm:mt-20 sm:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-12'>
        {blogs.map((blog,index)=>{
            return <BlogItem key={index} blog={blog} />
        })}
      </div>
    </div>
  )
}

export default Blogs
