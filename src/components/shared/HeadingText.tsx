import React from 'react'

type Props = {
    title:string;
    isWhite?:boolean;
}

const HeadingText = ({title,isWhite=false}: Props) => {
  return (
        <h1 className={`mb-16 font-bold text-4xl sm:text-6xl ${isWhite ? 'text-white' :'text-slate-900'}`}>
            {title}
        </h1>

  )
}

export default HeadingText