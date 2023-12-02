import Blogs from '@/components/blogs'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default HomePage
