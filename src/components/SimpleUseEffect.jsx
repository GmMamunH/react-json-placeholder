/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const SimpleUseEffect = () => {
  // users data show====================
  const [users, setUsers] = useState([]);
  // users data search=============================
  const [search, setSearch] = useState("");
  // users data filtered========================
  const [filteredUsers, setFilteredUsers] = useState([]);

  // get user data=============================================
  useEffect(() => {
    const fetchUser = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      setUsers(data);
    };
    fetchUser();
  }, []);

  // search user data===========================================
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    // filtered user data ==================================
    const filteredItems = users.filter((user) =>
      user?.username?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <div>
      <input
        className="m-5 p-2 border border-rose-900 rounded-lg"
        type="text"
        placeholder="search..."
        value={search}
        onChange={handleInputChange}
      />
      <div className="grid grid-cols-4 gap-10 p-5">
        {filteredUsers.map((user) => (
          <div key={user.id}>
            <div className="p-5 shadow-lg rounded-lg mt-2">
              <h1>
                <strong>Name: </strong>
                {user?.name}
              </h1>
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

export default SimpleUseEffect;
