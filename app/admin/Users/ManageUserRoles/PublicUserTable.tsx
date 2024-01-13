import React from "react";
import PublicUserCard from "./PublicUserCard";

type props = {
  users: any;
};

const UserTable = ({ users }: props) => {
  return (
    <div>
      {users.map((user: any, index: number) => {
        return (
          <PublicUserCard
            key={index}
            userId={user.id}
            userName={user.name}
            userNIC={user.nic}
            userPhone={user.phone}
          />
        );
      })}
    </div>
  );
};

export default UserTable;
