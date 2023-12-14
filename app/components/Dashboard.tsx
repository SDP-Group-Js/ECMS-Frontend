import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
        <p>This is Dashboard</p>
        <Link href="/Complaints" className="underline">
          go to Complaints
        </Link>
        <br></br>
        <Link href="/Institutions" className="underline">
          go to Institutions
        </Link>
        <br></br>
        <Link href="/Users" className="underline">
          go to Users
        </Link>
    </div>
  )
}

