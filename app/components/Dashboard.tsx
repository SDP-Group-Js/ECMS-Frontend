// pages/dashboard.js
import React from 'react';
import UserTable from '../components/UserTable';


const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  // Add more users as needed
];

export default function Dashboard() {
  return (
    <div className='py-60'>
      <p>Dashboard</p>
      <UserTable users={users} />
      {/* Other content or links */}
    </div>
  );
}