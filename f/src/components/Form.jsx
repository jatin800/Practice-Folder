import React from "react";
import Table from "./Table";

export default function Form() {
  return (
    <>
      <div className='container'>
        <h1>Create</h1>
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
          <button type='submit'>Submit</button>
        </form>
      </div>
      <hr />
      <Table />
    </>
  );
}
