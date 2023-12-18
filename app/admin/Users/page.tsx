'use client';

import React from 'react'
import UserHeader from './UserHeader'
import Users from './Users';
import './index.css';
import Sidebar from '@/components/shared/Sidebar';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <UserHeader />
                <div className='p-4'><Users /></div>
            </div>
        </div>
      );
    
}