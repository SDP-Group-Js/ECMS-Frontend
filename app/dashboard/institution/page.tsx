'use client';

import React from 'react'
import Sidebar from '../../components/shared/Sidebar'
import Header from '../../components/shared/Header'
import Dashboard from '../../components/Dashboard'
import './index.css';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <Header />
                <div className='p-4'><Dashboard /></div>
            </div>
        </div>
      );
    
}
