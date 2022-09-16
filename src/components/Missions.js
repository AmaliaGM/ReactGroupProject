import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Component } from 'react';

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

  const [buttonSelected, setButtonSelected] = useState([]);

  const handleClick = e => {
    console.log(e.target.value);
  }

  return (
    <div>
      <table className='table table-striped table-hover mt-5 shadow-1g'>
        <thead>
          <tr className='tableHead text-white'>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="missionNameTable">{mission.mission_name}</td>
              <td className="missionDescriptionTable">{mission.description}</td>
              <td><button className="member" type='button'>Not an Active Member</button></td>
              <td><button className="missionJoin" onClick={handleClick} type="checkbox" value={mission.mission_id}>Join Mission</button></td>
            </tr>
          ))}
        </tbody>  
      </table>   
    </div>
    );
  }

export default MyProfile;
