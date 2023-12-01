import React from 'react'

type Props = {
    title:string;
    link?:string;
}

const CustomButton = ({title,link}: Props) => {
  return (
    <button className="text-lg sm:text-2xl  text-[#443A8B] italic w-max py-3 sm:py-5 px-5 sm:px-12 border-2 border-[#443A8B] cursor-pointer">
        {title}
    </button>
  )
}

export default CustomButton