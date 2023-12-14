import React from 'react'
import { GiElephant } from "react-icons/gi"

export default function Header() {
  return (
    <div className='h-20 px-4 flex justify-between items-center'>
        
        <div className='flex justify-between items-center gap-2 tg'>
            <GiElephant fontSize={30}/>
            <span className='text-stone-900 text-lg ts'>WildLife</span>
        </div>

        <div className='px-4 flex justify-between pd bg-white h-16 items-center'>
            <div className='flex justify-between'>
                <div className='dt'>Divisions</div>
                <div className='df'>12</div>
            </div>
            <div className='flex justify-between'>
                <div className='dt'>Offices</div>
                <div className='dp'>32</div>
            </div>
        </div>
        

    </div>
   


  )
}
