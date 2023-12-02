import { Blog } from '@/types/types'
import React from 'react'

type Props = {
    blog:Blog
}

const BlogItem = ({blog:{title,link,date}}: Props) => {
  return (
    <div className='text-left cursor-pointer px-5 py-8 rounded-xl border hover:shadow-md'>
        <h1 className='text-lg font-[500] mb-2'>{title}</h1>
        <p>{date}</p>
    </div>
  )
}

export default BlogItem