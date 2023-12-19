import React from 'react'
import HeadingText from '../shared/HeadingText'
import CustomButton from '../shared/CustomButton'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub,FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from 'next/link';

const socials=[
    {icon:<FaLinkedin/>,link:'https://www.linkedin.com/in/may-thin-kyi-023b861b6/'},
    {icon:<FaGithub/>,link:'https://github.com/MayThinKyi'},
    {icon:<BiLogoInstagramAlt/>,link:'https://www.instagram.com/may__thinkyi/'},
    {icon:<FaFacebook/>,link:'https://www.facebook.com/profile.php?id=100045855702017'},
]

const Footer = () => {
  return (
    <div id='contact' className='bg-[#2F2F2F] text-white pt-[200px] pb-20 md:pt-[150px] md:pb-40 xl:pt-[250px] xl:pb-[100px]  sm:px-10 text-center clip-path2'>
      <HeadingText title={'GET IN TOUCH'} isWhite={true} />
      <CustomButton title='maytinkyi2003@gmail.com' color='#fff' />
      <div className='flex items-center justify-center mt-20 gap-5 sm:gap-10'>
        {socials.map((social,index)=>{
            return <Link target='_blank' href={social.link} key={index} >
                <span className='text-4xl sm:text-5xl cursor-pointer'>{social.icon}</span>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Footer
