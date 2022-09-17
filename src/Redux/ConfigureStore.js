import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MissionReducer from './Missions/MissionsReducer';

const store = configureStore({
  reducer: {
    MissionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
