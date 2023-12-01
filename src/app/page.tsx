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
    </div>
  )
}

export default HomePage
