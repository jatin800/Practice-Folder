import React from "react";

export default function Read() {
  return (
    <div>
      <div className='userdata'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>********</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
