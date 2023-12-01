import React from 'react'
import HeadingText from '../shared/HeadingText'
import CustomButton from '../shared/CustomButton'

const Introduction = () => {
  return (
    <div className='py-20 md:py-40 text-center'>
      <HeadingText title={'INTRODUCTION'} />
      <p className=' sm:text-xl sm:leading-[60px]  md:leading-[40px] tracking-widest w-[90%] sm:w-[80%] md:w-[60%] mt-16 mb-10 mx-auto'>
        I am a Front End Developer having a good understanding of design and layouts. I try to keep myself updated with the latest trends in the web world. I mostly work for Front end side of the applications.
      </p>
      <CustomButton title={'I play with Front End Everyday'} />
    </div>
  )
}

export default Introduction
