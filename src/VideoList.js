import React from 'react'
import VideoTile from './VideoTile'

const VideoList = (props) => {
    return(
        //props=  {
            //stuff
            //video: {}
        // }
        <div>
            This is my VideoList
            <br/>
            {props.videos.map(video=> <VideoTile {...video} changeMovie={props.changeMovie}/>)}
            
        </div>
    )
}

export default VideoList;