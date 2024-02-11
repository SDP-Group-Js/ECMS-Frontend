import React from "react";
import UserCard from "./UserCard";

type props = {
  users: any;
};

const UserTable = ({ users }: props) => {
  return (
    <div>
      {users.map((user: any, index: number) => {
        return (
          <UserCard
            key={index}
            userId={user.id}
            userName={user.name}
            userType={user.userRole}
            userOfficeId={user.office.id}
            userOfficeName={user.office.name}
          />
        );
      })}
    </div>
  );
};

export default UserTable;
