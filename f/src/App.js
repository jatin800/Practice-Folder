import React from "react";

export default function App() {
  return (
    <div className='container'>
      <h1>Create User</h1>
      <form>
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
      </form>
    </div>
  );
}
