import React from 'react'

const UserRow = ({ user }) =>  {
   
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.lastseen}</td>
            <td>{user.createdAt}</td>
            <td>{user.actions}</td>
            <td><a href="#">View</a></td>
            </tr>
    )
}

export default UserRow;