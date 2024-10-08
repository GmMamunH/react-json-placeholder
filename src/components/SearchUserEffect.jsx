/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const SearchUserEffect = () => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const [filterUserSearch, setFilterUsersSearch] = useState([]);

  // data fetch =======================================
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      setUsers(data);
      setFilterUsersSearch(data)
      console.log(data);
    };
    fetchUsers();
  }, []);

  //   search handler ===========================
  const searchHandler = (e) => {
    const searchTerm = e.target.value;
    setSearchUsers(searchTerm);

    const filterSearchData = users.filter((user) => 
      user?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilterUsersSearch(filterSearchData);
  };
  //   ===========================================
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="p-5 rounded-lg border bg-gray-500">
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Search by name..."
          value={searchUsers}
          onChange={searchHandler}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {filterUserSearch.map((user) => (
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

export default SearchUserEffect;
