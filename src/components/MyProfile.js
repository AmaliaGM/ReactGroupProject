import React, { useState, useEffect } from 'react';

function MyProfile() {
  const [ users, setUsers] = useState([]);
  const [ search, setSearch] = useState('');

  const URL = 'https://api.spacexdata.com/v3/missions';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setUsers(data)
  }

  useEffect( () => {
    showData();

  }, []);

  return (
  <div>
    <table className='table table-striped table-hover mt-5 shadow-1g'>
      <thead>
        <tr>
        <th>MISSION</th>
        <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {users.map( (user) => {
          <tr key={user.id}>
            <td>{user.missionName}</td>
            <td>{user.description}</td>
          </tr>
        })}
      </tbody>
  
    </table>   
  </div>
  )
}

export default MyProfile;
