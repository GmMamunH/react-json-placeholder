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
    <div>LandingPage</div>
  )
}

export default LandingPage