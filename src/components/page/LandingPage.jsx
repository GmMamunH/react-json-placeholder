/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      setUsers(data?.data);
    });
  }, []);
  return (
    <>
      <header className=" bg-white shadow">
        <nav className="flex justify-between items-center py-2 container mx-auto">
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
        <div className="grid grid-cols-1  gap-5 mt-5 max-w-screen-sm mx-auto">
          {users.map((user) => (
            <div key={user?.id}>
              <div className="border shadow rounded-md  p-8 ">
                <div className="flex flex-col gap-4">
                  <section>
                    <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
                      {user?.name}
                    </p>
                  </section>

                  <section>
                    <p className="flex gap-2 items-center">
                      <FaPhoneAlt />
                      <span className="text-sm text-gray-900 font-normal">
                        {user?.phone}
                      </span>
                    </p>
                    <p className="flex gap-2 items-center">
                      <FaLocationDot />
                      <span className="text-sm text-gray-900 font-normal">
                        {user?.address?.street}, {user?.address?.suite},{" "}
                        {user?.address?.city}
                      </span>
                    </p>

                    <p className="flex gap-2 items-center">
                      {" "}
                      <RiGlobalFill />
                      <span className="text-sm text-gray-900 font-normal">
                        {" "}
                        {user?.website}{" "}
                      </span>
                    </p>
                    <p className="flex gap-2 items-center">
                      <MdLocationCity />
                      <span className="text-sm text-gray-900 font-normal">
                        {user?.company?.name}{" "}
                      </span>
                    </p>
                  </section>
                  <section className="flex gap-4">
                    <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                      Posts
                    </button>
                    <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                      Albums
                    </button>
                    <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                      Todos
                    </button>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
