import React from 'react'

type Props = {
    title:string;
    link?:string;
    color?:string;
}

const CustomButton = ({title,link,color='#443A8B'}: Props) => {
  return (
    <button style={{color:color,borderColor:color}} className={`break-all	text-sm sm:text-2xl   italic w-max py-3 sm:py-5 px-2 sm:px-12 border-2  cursor-pointer`}>
        {title}
    </button>
  )
}

export default CustomButton