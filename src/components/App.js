import '../App.css';
import { Route, Routes } from 'react-router-dom/dist';
import Missions from './Missions';
import MyProfile from './MyProfile';
import Rockets from './Rockets';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          ;
          <Route path="/missions" element={<Missions />} />
          ;
          <Route path="/myprofile" element={<MyProfile />} />
          ;
        </Routes>
      </div>
    </div>
  );
}

export default App;
