/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const LoadingJsonArray = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsersData = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      setUsers(data);
      console.log(data);
    };
    fetchUsersData();
  }, []);

  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingJsonArray;
