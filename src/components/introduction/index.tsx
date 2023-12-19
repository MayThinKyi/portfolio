import React from 'react'
import HeadingText from '../shared/HeadingText'
import CustomButton from '../shared/CustomButton'

const Introduction = () => {
  return (
    <div id='about' className='py-20 md:py-40 text-center'>
      <HeadingText title={'INTRODUCTION'} />
      <p className=' sm:text-xl sm:leading-[60px]  md:leading-[40px] tracking-widest w-[90%] sm:w-[80%] md:w-[60%] mt-16 mb-10 mx-auto'>
      I specialize in building frontend side of the applications, blending the power of React with the type safety of TypeScript. With a knack for clean code and an eye for UI/UX. Let&apos; s innovate and code something awesome together!
      </p>
      <CustomButton title={'I play with Front End Everyday'} />
    </div>
  )
}

export default Introduction
