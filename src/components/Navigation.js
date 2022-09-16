import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

function Navigation() {
  return (
    <div>
      <div className='bigNav'>
        <img src={planet} className="planetIcon" alt="planet icon" />
        <h1>Space Traveler&apos;s Hub</h1>
      
      <div>
        <ul>
          <li>
            <NavLink className="NavRockets" to="/">ROCKETS</NavLink>
          </li>
          <li>
            <NavLink className="NavMissions" to="/Missions">MISSIONS</NavLink>
          </li>
          <li>
            <NavLink className="NavMyProfile" to="/MyProfile">MYPROFILE</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navigation;
