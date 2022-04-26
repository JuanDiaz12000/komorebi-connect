import { ImportantDevices } from "@mui/icons-material";
import React from "react";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import SearchBar from "./Components/searchVideoBar";
import VideoSelect from "./Components/videoSelect";
import RecordingScreenDialog from "./Components/recordingScreen";
import AmazonConnectWindow from "./Components/amazonConnectWindow";
import Login from "./Components/login";
import "./index.scss"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


//import VideoSearchScreen from "./Components/VideoSearchScreen";
function App() {
  return (
    <Router>
{/*         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={<LogInRoute/>}/>
        </Routes>
    </Router>
  );
}


function LogInRoute() {
  return <Login/>;
}

function About() {
  return (
    <div>
    <NavBar userName="Juan Díaz" userType="Manager"/>
    <div className="centerScreen">
      <SideBar/>
      <div className='centerPart' style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
        <AmazonConnectWindow/>
        <RecordingScreenDialog/>
      </div>
    </div>
    </div>
  )
}

function Users() {
  return(
    <div>
    <NavBar userName="Juan Díaz" userType="Manager"/>
    <div className="centerScreen">
      <SideBar/>
      <div className='centerPart'>
          <h2>Search</h2>
          <SearchBar/>
          <VideoSelect/>
      </div>
    </div>
  </div>
  );
}

export default App;
