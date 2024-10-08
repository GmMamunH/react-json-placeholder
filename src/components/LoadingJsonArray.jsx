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
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {users.map((user) => (
          <div key={user.id}>
            <div className="border shadow-lg rounded-lg  p-3">
              <p>
                <strong>Name: </strong> {user.name}
              </p>
              <p>
                <strong>Username: </strong> {user?.username}
              </p>
              <p>
                <strong>Email: </strong> {user?.email}
              </p>
              <p>
                <strong>Phone: </strong> {user?.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingJsonArray;
