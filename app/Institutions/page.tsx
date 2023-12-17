"use client";

import React from 'react'
import Sidebar from '@/app/components/shared/Sidebarn';
import InstmHeader from '@/app/components/institution-module/institution-man/InstmHeader';
import ManInst from '../components/institution-module/institution-man/Manage-Institutions';
import './index.css';
import DashboardContentPanel from '../components/shared/DashboardContentPanel';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <InstmHeader />
                <div className='p-4'><ManInst /></div>
            </div>
        </div>
      );

}
//changeee
