import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Read() {
  const { id } = useParams();

  const [userData, setUserData] = useState([]);
  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/read/${id}`);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleUser();
  }, []);

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
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>{userData.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
