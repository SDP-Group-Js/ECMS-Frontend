'use client'
 
import React from 'react';
import Link from 'next/link';
import { GiElephant } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation-n';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-4 border font-light px-5 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-200 rounded-sm text-base text-stone-900 pt';

interface SidebarItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

interface SidebarLinkProps {
  item: SidebarItem;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item }) => {
  return (
    <Link href={item.path} passHref>
      <span className={classNames('text-xl', linkClasses)}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}
      </span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  // Dummy data 
  const userData = {
    name: 'John Doe',
  };

  return (
    <div className='bg-neutral-300 w-60 p-3 flex flex-col text-brown'>
      <div className='flex items-center gap-3 px-2 py-2'>
        <GiElephant fontSize={26} />
        <b><span className='text-stone-900 text-lg h'>Wildlife Institution</span></b>
      </div>

      <div className='flex pr'>
        Welcome back, {userData.name}
      </div>

      <div className='flex-1 pt flex-col text-stone-900'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div>
        <div className={classNames('pi', linkClasses)}>
          <span className='text-xl'>
            <FiLogOut />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
