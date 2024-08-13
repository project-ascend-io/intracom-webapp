"use client";

import { useEffect, useState } from "react";

export default function ViewUserListPage() {
  const [userData, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setData(res.users));
  }, []);

  return (
    <>
      <div>
        <p>Users</p>
        <h1>Search Users</h1>
      </div>
      <div></div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((data) => {
              return (
                <tr>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td>{data.birthDate}</td>
                  <td>View</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
