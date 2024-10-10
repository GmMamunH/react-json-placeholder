/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LandingPage = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
            console.log(data);
          

        });
    },[])
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
          <section className='flex gap-3'>
            <input className='py-2 px-4 border border-slate-300 rounded-md text-base font-normal text-slate-400 ' type="text" placeholder="name or username" />
            <button className='bg-black text-white rounded-md px-4 font-medium text-sm' >Search</button>
          </section>
        </nav>
      </header>
    </>
  );
}

export default LandingPage