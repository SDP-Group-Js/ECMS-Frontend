import React from "react";
import PublicUserCard from "./PublicUserCard";

type props = {
  users: any;
};

const UserTable = ({ users }: props) => {
  return (
    <div>
      {users.map((user: any) => {
        return (
          <PublicUserCard
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
