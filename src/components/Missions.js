import React, { useState, useEffect } from 'react';

function MyProfile() {
  const [missions, setMissions] = useState([]);

  const URL = 'https://api.spacexdata.com/v3/missions';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMissions(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    /* if (e.target.id == isActive.id) */
    setIsActive((active) => !active);
  };

  return (
    <div>
      <table className="table table-striped table-hover mt-5 shadow-1g">
        <thead>
          <tr className="tableHead text-white">
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
              <td><button className="member" type="button" value={mission.mission_id}>Not an Active Member</button></td>
              <td>
                <button
                  className="missionJoin"
                  onClick={handleClick}
                  type="button"
                  value={mission.mission_id}
                  style={{
                    backgroundColor: isActive ? 'salmon' : '',
                    color: isActive ? 'white' : '',
                  }}
                >
                  {isActive ? 'LEAVE MISSION' : 'JOIN MISSION'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyProfile;
