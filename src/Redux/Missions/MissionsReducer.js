/* eslint-disable linebreak-style */
const ADD_MISSION = 'reactgroupproject/missions/ADD_MISSION';
const DELETE_MISSION = 'reactgroupproject/missions/DELETE_MISSION';
const ADD_ALL_MISSION = 'reactgroupproject/missions/ADD_ALL_MISSION';
//  const baseURL = 'https://api.spacexdata.com/v3/missions';

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});
export const deleteMission = (payload) => ({
  type: DELETE_MISSION,
  payload,
});

export const fetchMission = (payload) => ({
  type: ADD_ALL_MISSION,
  payload,
});

const initialState = [
  {
    mission_id: '9D1B7E0',
    missionName: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  },
];

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MISSION:
      return state.filter(({ id }) => id !== action.payload);
    case ADD_MISSION:
      return [...state, action.payload];
    case ADD_ALL_MISSION:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const fetchData = async () => {
  const data = await fetch('https://api.spacexdata.com/v3/missions');
  const response = await data.json();
  const missionArray = Object.entries(response);
  const array = [];
  missionArray.map(([key, value]) => {
    const obj = {};
    obj.id = key;
    obj.name = value[0].missionName;
    obj.description = value[0].description;
    // obj.category = value[0].category;
    return array.push(obj);
  });

  return array;
};

export const postData = async ({ id, missionName, missionDescription }) => {
  const data = await fetch('https://api.spacexdata.com/v3/missions', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      name: missionName,
      description: missionDescription,
      // category: 'adventure',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const response = await data.text();
  localStorage.setItem('items', JSON.stringify(response));
};

export default MissionReducer;
