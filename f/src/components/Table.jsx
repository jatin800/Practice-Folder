import React, { useEffect, useState } from "react";
import { CiRead } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Table() {
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

  const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/edit/${id}`);
  };

  const handleRead = (id) => {
    navigate(`/read/${id}`);
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
            {userData.length > 0 &&
              userData.map((data) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <button onClick={() => handleEdit(data._id)}>
                      <FaUserEdit />
                    </button>
                    <button onClick={() => handleRead(data._id)}>
                      <CiRead />
                    </button>
                    <button>
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
