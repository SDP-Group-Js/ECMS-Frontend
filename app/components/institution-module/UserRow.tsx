'use client'

import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserRow: React.FC<{ user: User }> = ({ user }) => {
    return (
      <tr>
        <td className="border px-4 py-2">{user.id}</td>
        <td className="border px-4 py-2">{user.name}</td>
        <td className="border px-4 py-2">{user.email}</td>
      </tr>
    );
  };

export default UserRow;