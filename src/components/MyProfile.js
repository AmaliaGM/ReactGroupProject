import React, { useState, useEffect } from 'react';

function MyProfile() {
  const [ missions, setMissions] = useState([]);
  const [ search, setSearch] = useState('');

  const URL = 'https://api.spacexdata.com/v3/missions';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    console.log(data[0].mission_id)
    setMissions(data)
  }

  useEffect(() => {
    showData();
  }, []);

  return (
  <div>
    <table className='table table-striped table-hover mt-5 shadow-1g'>
      <thead>
        <tr className='tableHead text-white'>
          <th>MISSION</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
             <td>{mission.mission_name}</td>
             <td>{mission.description}</td>
          </tr>/* [1].description
          [1].mission_name */
        ))}
      </tbody>  
    </table>   
  </div>
  )
}

export default MyProfile;
