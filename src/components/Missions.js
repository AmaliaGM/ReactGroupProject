import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchMission } from '../Redux/Missions/MissionsReducer';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    const missionData = async () => {
      const response = await fetchData();

      console.log('MISSIONS', response);
      dispatch(fetchMission(response));
    };

    missionData();
  }, []);
  const missions = useSelector((store) => store.MissionReducer);
  console.log('mission components', missions);

  return (
    <div>
      {
        missions.map((mission) => (
          <div className="mediumCont" key={mission.id}>
            <div>
              <div className="Mission">
                <span className="missionMission">{mission.name}</span>
                <span className="missionDescription">{mission.description}</span>
              </div>
              
            </div>

          </div>
        ))
      }
    </div>
  );
}

export default Missions;
