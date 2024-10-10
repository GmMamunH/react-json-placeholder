import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState({
    name: " ",
  });

  const [users, setUsers ]=useState([])

  const handleChange = (e) => {
    e.preventDefault();

    setName({
      name: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { name })
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setUsers(res.data.id);
        setUsers(res.data.name);
      });
  };

  return (
    <div>
      <p>Add Users</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>

      {/* <div>
        {users.map((user)=>(
            <div key={user.id}>
                <p>{user.name}</p>

            </div>
        ))}

      </div> */}
      <div>{users?.res?.data?.id}</div>
    </div>
  );
};

export default AddUser;
