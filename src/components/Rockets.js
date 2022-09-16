import React, { useState, useEffect } from 'react';

function Rockets() {
  const [ rockets, setRockets] = useState([]);
  const [ search, setSearch] = useState('');

  const URL = 'https://api.spacexdata.com/v3/rockets';

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    console.log(data[0].rockets_id)
    setRockets(data)
  }

  useEffect(() => {
    showData();
  }, []);

  return (
  <div>
    <table className='table table-striped table-hover mt-5 shadow-1g'>
      <thead>
        <tr className='tableHead text-white'>
          <th>ROCKET</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {rockets.map((rocket) => (
          <tr key={rocket.id} className="rocketTableBody">
             <td><img className='rocketImage' src={rocket.flickr_images} alt="rocket image" /></td>
             <td className="rocketInfo">
                <h2>{rocket.rocket_name}{"\n"}</h2>
                <p>{rocket.description}</p>
                <button className="reserveRocketButton" type="button">Reserve Rocket</button>
             </td>
          </tr> 
        ))}
      </tbody>  
    </table>   
  </div>
  )
}

export default Rockets;
