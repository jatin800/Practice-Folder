import React, { useEffect, useState } from "react";
import { CiRead } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Table({ name, email, password }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleRead = () => {
    navigate("/read");
  };

  return (
    <div>
      <div className='userdata'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>
                <button onClick={handleEdit}>
                  <FaUserEdit />
                </button>
                <button onClick={handleRead}>
                  <CiRead />
                </button>
                <button>
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
