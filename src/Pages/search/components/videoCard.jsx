import * as React from 'react';
import './Style/videoCard.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TagIndicator from './buttonVideoCard';

function VideoCard(props){
    return(
        <div className='videoCard'>
            <div className='videoThumbnail'>
                <PlayArrowIcon style={{fontSize:"5vh", color: "#fafafa"}}/>
            </div>
            <div className='information'>
                <p>
                    AgentID: {props.agent}
                </p>
                <p>
                    Name: {props.name}
                </p>
                <p>
                    Date: {props.date}
                </p>
            <div className='tagIndicatorTags'>
                <TagIndicator tagName="Good"/>
                <TagIndicator tagName="TroubleShooting"/>
                <TagIndicator tagName="Fast"/>
            </div>
            </div>
        </div>
    )
}

export default VideoCard;
