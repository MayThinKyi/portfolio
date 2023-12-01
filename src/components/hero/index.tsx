import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative clip-path bg-[#443A8B] text-white py-20 text-center'>
            <img src={'/images/react.svg'} className='w-[400px] lg:w-[900px] lg:h-[600px] absolute top-[-50px] sm:top-[-100px] lg:top-[-50px] left-[-180px] sm:left-[-200px] lg:left-[-450px] lg:bottom-0' />
            <div className='flex flex-col justify-center h-[50vh]'>
                <Image alt='Profile Photo' src={'/images/maythinkyi.png'} className='border-[10px] border-[#60579C] mx-auto rounded-full object-center'
             width={130} height={130} priority={true} />
            <h1 className='text-4xl md:text-6xl font-bold my-8'>May Thin Kyi</h1>
            <div className='mx-auto  border border-white py-2  px-2 sm:px-5 w-max text-sm sm:text-lg'>
                {"< Frontend Developer - @Conceptians /> " }
            </div>
            </div>

    </div>
  )
}

export default Hero
