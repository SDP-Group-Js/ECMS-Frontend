'use client';

import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import CompHeader from './CompHeader'
import Complaints from './Complaints'
import './index.css';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <CompHeader />
                <div className='p-4'><Complaints /></div>
            </div>
        </div>
      );
    
}