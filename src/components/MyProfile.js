import React, { useState, useEffect } from 'react';

function MyProfile() {
  const [ missions, setMissions] = useState([]);
  const [ search, setSearch] = useState('');

  const URL = 'https://api.spacexdata.com/v3/missions';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    setMissions(data)
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
        {missions.map( (mission) => {
          <tr key={mission.id}>
            <td>{mission.missionName}</td>
            <td>{mission.description}</td>
          </tr>
        })}
      </tbody>  
    </table>   
  </div>
  )
}

export default MyProfile;
