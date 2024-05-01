import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

export default function Form() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState([]);

  const fetchAllData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/readall");
      setUserData(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/create",
        formInput
      );
      console.log(response.data);
      setFormInput({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Create</h1>
        <form>
          <div>
            <label>
              <span className='span'>Name:</span>
              <input
                className='input'
                type='text'
                name='name'
                value={formInput.name}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label>
              <span className='span'>email:</span>
              <input
                className='input'
                type='email'
                name='email'
                value={formInput.email}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label>
              <span className='span'>password:</span>
              <input
                className='input'
                type='password'
                name='password'
                value={formInput.password}
                onChange={handleInput}
              />
            </label>
          </div>
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <hr />
      {userData.map((data) => (
        <Table
          id={data._id}
          name={data.name}
          email={data.email}
          password={data.password}
        />
      ))}
    </>
  );
}
