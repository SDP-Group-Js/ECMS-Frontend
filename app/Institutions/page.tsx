'use client';

import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import InstHeader from './InstHeader'
import Institutions from './Institutions';
import './index.css';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <InstHeader />
                <div className='p-4'><Institutions /></div>
            </div>
        </div>
      );
    
}