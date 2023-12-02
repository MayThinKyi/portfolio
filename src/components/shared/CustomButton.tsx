import React from 'react'

type Props = {
    title:string;
    link?:string;
    color?:string;
}

const CustomButton = ({title,link,color='#443A8B'}: Props) => {
  return (
    <button style={{color:color,borderColor:color}} className={`overflow-x-hidden text-lg sm:text-2xl   italic w-max py-3 sm:py-5 px-5 sm:px-12 border-2  cursor-pointer`}>
        {title}  
    </button>
  )
}

export default CustomButton