import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import SearchBar from "./Components/searchVideoBar";
import VideoSelect from "./Components/videoSelect";
import RecordingScreenDialog from "./Components/recordingScreen";
import AmazonConnectWindow from "./Components/amazonConnectWindow";
import Login from "./Components/login";
import Grabador from "./Components/Recorder";
import "./index.scss"
import VideoSearchPage from "./Pages/search";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/video-search" element={<VideoSearchPage/>}/>
          <Route path="/video" element={<Grabador/>}/>
          <Route path="/users" element={<About/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
    </Router>
  );
}



function About() {
  return (
    <div className="centerScreen">
      <SideBar/>
      <div className='centerPart' style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
        <AmazonConnectWindow/>
        <RecordingScreenDialog/>
      </div>
    </div>
  )
}

function Users() {
  return(    
    <div className="centerScreen">
    <SideBar/>
      <div className='centerPart'>
          <h2>Search</h2>
          <SearchBar/>
          <VideoSelect/>
      </div>
    </div>
  );
}

export default App;
