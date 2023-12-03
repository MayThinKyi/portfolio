import { Skill } from '@/types/types'
import React from 'react'

const SkillItem = ({img,title}: Skill) => {
  return (
    <div className='cursor-pointer mx-auto bg-[#f7f7f7] text-slate-900  py-6 w-[120px] h-[120px] flex flex-col items-center justify-center rounded-full border shadow-lg hover:shadow-xl'>
       <img src={img} alt={title} className='max-w-[60px] max-h-[60px] object-contain' />
       <p className='text-sm font-semibold text-slate-600'>{title}</p>
    </div>
  )
}

export default SkillItem