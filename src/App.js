import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import SideBar from "./GlobalComponents/sideBar";
import RecordingScreenDialog from "./Pages/recording/components/recordingScreen";
import AmazonConnectWindow from "./Pages/recording/components/amazonConnectWindow";
import Login from "./Pages/logIn";
import Grabador from "./GlobalComponents/Recorder";
import "./index.scss"
import RecordingSessionPage from "./Pages/recording";
import VideoSearchPage from "./Pages/search";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
    <Router>
        <Routes>
          <Route path= "/aws-connect" element={<RecordingSessionPage/>}/>
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

export default App;
