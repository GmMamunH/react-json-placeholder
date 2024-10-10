/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data?.data);
    });
  }, []);
  return (
    <>
      <header className=" bg-white shadow-lg">
        <nav className="flex justify-between items-center py-5 container mx-auto">
          <section>
            <h1 className="text-base text-black font-bold ">
              JSONPlaceholder{" "}
            </h1>
          </section>
          <section>
            <ul className="flex gap-3">
              <li>
                <a
                  className="capitalize hover:bg-slate-100 duration-300 rounded-md py-2 px-4 text-sm font-medium text-slate-900"
                  href="#"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  className="capitalize hover:bg-slate-100 duration-300 rounded-md py-2 px-4 text-sm font-medium text-slate-900"
                  href="#"
                >
                  post
                </a>
              </li>
            </ul>
          </section>
          <section className="flex gap-3">
            <input
              className="py-2 px-4 border border-slate-300 rounded-md text-base font-normal text-slate-400 "
              type="text"
              placeholder="name or username"
            />
            <button className="bg-black text-white rounded-md px-4 font-medium text-sm">
              Search
            </button>
          </section>
        </nav>
      </header>
      {/* ==================================================== */}

      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 p-5">
          {users.map((user) => (
            <div key={user?.id}>
              <div className="border shadow-lg rounded-lg  p-3">
                <p>
                  <strong>Name: </strong> {user?.name}
                </p>
                <p>
                  <strong>Phone: </strong> {user?.phone}
                </p>
                <p>
                  <strong>Address: </strong> {user?.address?.street},{" "}
                  {user?.address?.suite}, {user?.address?.city}
                </p>
                
                <p>
                  <strong>Website: </strong> {user?.website}
                </p>
                <p>
                  <strong>Company: </strong> {user?.company?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
