'use client';
import React,{useState} from 'react'
import { slide as HamburgerMenu, State } from 'react-burger-menu'
import { FiMenu } from "react-icons/fi";

const Menu = () => {
  const [isOpen,setIsOpen]=useState(false);
  const isMenuOpen = function(state:State) {
    return setIsOpen(state.isOpen)
  };
  
  
  return (<>
    <div className='fixed top-5  right-5 z-[999]'>
    {!isOpen && <div onClick={()=>setIsOpen(!isOpen)} className=' w-max  p-3 rounded-full bg-white  text-black border shadow-lg'>
    <FiMenu size={30} />
    </div>}
    <HamburgerMenu onStateChange={ isMenuOpen } isOpen={ isOpen }   width={'100%'} className=' h-[100vh] py-20 fixed top-0 left-0 right-0 bottom-0  px-10 bg-[#2F2F2F] text-white text-center z-[999]'>
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer fixed right-5 top-5 w-max  p-3 rounded-full bg-white  text-black border shadow-lg'>
    <FiMenu size={30} />
    </div>
    <div className='mt-10 ' >
    <a id="home" className="hover:underline text-xl sm:text-2xl uppercase menu-item block mb-10" href="/">About</a>
    <a id="about" className="hover:underline text-xl sm:text-2xl uppercase menu-item block  mb-10" href="/about">Skills</a>
    <a id="contact" className="hover:underline text-xl sm:text-2xl uppercase menu-item block mb-10" href="/contact">Projects</a>
    <a id="contact" className="hover:underline text-xl sm:text-2xl uppercase menu-item block mb-10 " href="/contact">Blogs</a>
    <a id="contact" className="hover:underline text-xl sm:text-2xl uppercase menu-item block " href="/contact">Contacts</a>

    </div>
  </HamburgerMenu>
  </div></>
  )
}

export default Menu
