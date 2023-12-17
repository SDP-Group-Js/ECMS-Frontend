"use client";

import React from 'react'
import Sidebar from '@/app/components/shared/Sidebarn';
import OfficesHeader from '@/app/components/manage-offices/OfficesHeader';
import ManOffices from '@/app/components/manage-offices/Manage-Office';
import '@/app/Institutions/index.css'; //change this

export default function Home(){
    return (
        <div className='flex flex-row bg-slate-50 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex-1'>
                <OfficesHeader />
                <div className='p-4'><ManOffices /></div>
            </div>
        </div>
      );

}