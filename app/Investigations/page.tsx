'use client';

import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import InvestHeader from './InvestHeader'
import Investigations from './Investigations';
import './index.css';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <InvestHeader />
                <div className='p-4'><Investigations /></div>
            </div>
        </div>
      );
    
}