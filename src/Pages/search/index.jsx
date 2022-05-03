import '../../index.scss'
import SideBar from '../../Components/sideBar'
import SearchBar from './components/searchVideoBar'
import VideoSelect from './components/videoSelect'

function VideoSearchPage() {
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

  export default VideoSearchPage;
