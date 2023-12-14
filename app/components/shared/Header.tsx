import React from 'react'
import { GiElephant } from "react-icons/gi"

export default function Header() {
  return (
    <div className='h-20 px-7 flex justify-between items-center'>
        
        <div className='flex justify-between items-center gap-2 tg'>
            <GiElephant fontSize={40}/>
            <span className='text-stone-900 text-lg ts'>WildLife</span>
        </div>

        <div className='px-14 flex justify-between pd h-16 items-center'>
            <div className='flex justify-between'>
                <div className='dt px-20 bg-slate-500'>Divisions</div>
                <div className='df px-10 bg-slate-900'>12</div>
            </div>
            <div className='flex justify-between '>
                <div className='dt px-20 bg-neutral-500'>Offices</div>
                <div className='dp px-10 bg-neutral-900'>32</div>
            </div>
        </div>
        

    </div>
   


  )
}
