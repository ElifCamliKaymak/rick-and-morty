import React, { useEffect, useState } from "react";

import UserCard from "../../components/UserCard";

import { getData } from "../../helper/network";

import "./index.scss"

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData("http://localhost:5001/users").then((response) =>
      setUsers(response)
    );
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
};

export default User;
