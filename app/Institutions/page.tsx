'use client';

import React from 'react'
import Sidebarn from '../components/shared/Sidebarn'
import InstmHeader from '../components/institution-module/institution-man/InstmHeader'
import ManInst from '../components/institution-module/institution-man/Manage-Institutions';
import './index.css';
import DashboardContentPanel from '../components/shared/DashboardContentPanel';

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebarn />
            <div className='flex-1'>
                <InstmHeader />
                <div className='p-4'><DashboardContentPanel /></div>
            </div>
        </div>
      );

}
//changeee