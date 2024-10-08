/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const LoadingJsonArray = () => {
  // data show state ==============================
  const [users, setUsers] = useState([]);
  // search input value ==============================
  const [searchValue, setSearchValue] = useState("");
  // filter search ======================================
  const [filterSearchValue, setFilterSearchValue] = useState([]);

  // data fetch ===========================================
  useEffect(() => {
    const fetchUsersData = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetchData.json();
      setUsers(data);
      setFilterSearchValue(data);
    };
    fetchUsersData();
  }, []);
  // search value handler ============================================
  const searchValueHandler = (e) => {
    const searchTerm = e?.target?.value;
    setSearchValue(searchTerm);
    // filter search value =====================================
    const filterSearchTerm = users.filter((user) =>
      user?.name.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilterSearchValue(filterSearchTerm);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      {/* input search ============================== */}
      <div className="p-5 rounded-lg border bg-gray-500">
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Search by name..."
          value={searchValue}
          onChange={searchValueHandler}
        />
      </div>
      {/* data show ============================== */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {filterSearchValue?.length > 0 ? (
          filterSearchValue.map((user) => (
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
          ))
        ) : (
          <h1 className="text-2xl font-bold text-center text-red-700">Data loading.....</h1>
        )}
      </div>
    </div>
  );
};

export default LoadingJsonArray;
