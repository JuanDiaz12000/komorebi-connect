import '../../index.scss'
import SideBar from '../../Components/sideBar'
import SearchBar from '../../Components/searchVideoBar'
import VideoSelect from '../../Components/videoSelect'

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
