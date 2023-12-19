import React from "react";
import UserCard from "./UserCard";


const UserTable = () => {
  return (
    <div>
      <UserCard
        userId={1}
        userName="user Name"
        userType="user Role" //The Type
        userDescription="Office"
      />
      <UserCard
        userId={1}
        userName="user Name"
        userType="user Role" //The Type
        userDescription="Office"
      />
      <UserCard
       userId={1}
       userName="user Name"
       userType="user Role" //The Type
       userDescription="Office"
      />
      <UserCard
         userId={1}
         userName="user Name"
         userType="user Role" //The Type
         userDescription="Office"
      />
      <UserCard
         userId={1}
         userName="user Name"
         userType="user Role" //The Type
         userDescription="Office"
      />
    </div>
  );
};

export default UserTable;
