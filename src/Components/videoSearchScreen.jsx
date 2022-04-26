import React from "react";
import SearchBar from './searchVideoBar';
import VideoSelect from './videoSelect';

function VideoSearchScreen(){
    return(
        <div className='centerPart'>
            <h2>Search</h2>
            <SearchBar/>
            <VideoSelect/>
        </div>
    )
}

export default VideoSearchScreen()