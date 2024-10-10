/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 p-5">
      
      {post.map((item) => (
        <div key={item.id}>
          <div className="border shadow-lg rounded-lg  p-3">
            <p>
              <strong>Name: </strong> {item.name}
            </p>
            <p>
              <strong>Username: </strong> {item?.username}
            </p>
            <p>
              <strong>Email: </strong> {item?.email}
            </p>
            <p>
              <strong>Phone: </strong> {item?.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Axios;
