import React from "react";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className='container'>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span className='span'>Name:</span>
            <input className='input' type='text' />
          </label>
        </div>
        <div>
          <label>
            <span className='span'>email:</span>
            <input className='input' type='email' />
          </label>
        </div>
        <div>
          <label>
            <span className='span'>password:</span>
            <input className='input' type='password' />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
