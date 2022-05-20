import { ImportantDevices } from "@mui/icons-material";
import "./index.scss"
import React from "react";
import Login from "./Pages/logIn";
//import Grabador from "./GlobalComponents/Recorder";
import AddUserPage from "./Pages/addUsers"
import RecordingSessionPage from "./Pages/recording";
import StatysticsDashBoardPage from "./Pages/statystics";
import VideoSearchPage from "./Pages/search";
import SupervisorInformationPage from './Pages/userSearch/supervisorSearch'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserAdminPage from './Pages/userAdministration'

//<Route path="/video" element={<Grabador/>}/>
//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
    <Router>
        <Routes>      
          <Route path= "/aws-connect" element={<RecordingSessionPage/>}/>
          <Route path="/new-user" element={<AddUserPage/>}/>
          <Route path= "/statistics" element={<StatysticsDashBoardPage/>}/>
          <Route path="/supervisor-information" element={<SupervisorInformationPage/>}/>        
          <Route path="/user-administration" element={<UserAdminPage/>}/>      
          <Route path="/video-search" element={<VideoSearchPage/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </Router>
  );
}


export default App;
