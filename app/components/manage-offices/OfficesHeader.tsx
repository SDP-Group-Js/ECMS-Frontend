import React from 'react'
import { GiElephant } from "react-icons/gi"

export default function OfficesHeader() {
  return (
    <div className='h-20 px-7 flex justify-between items-center'>
        
        <div className='flex justify-between items-center gap-2 tg'>
            <GiElephant fontSize={40}/>
            <span className='text-stone-900 text-lg ts'>Manage Offices</span>
        </div>

    </div>

  )
}
