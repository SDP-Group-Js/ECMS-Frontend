import React from 'react';
import UserTable from '../components/UserTable';
import EditDetailsBtn from '../components/EditDetailsbtn';
import ReactModal from 'react-modal';


const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

export default function Dashboard() {
  return (
    <div className='py-60'>
      <p>Dashboard</p>
      <UserTable users={users} />
      <br></br>
      <EditDetailsBtn label="Edit Institution Details" /> 
    </div>
  );
}