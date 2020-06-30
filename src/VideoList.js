import React from 'react'
import VideoTile from './VideoTile'

class VideoList extends React.Component{
    render(){
        return(
        <div>
            {  this.props.videos.map(video => { return <VideoTile video={video} changeVideo={this.props.changeVideo}   /> } )}
            
        </div>

        )}
}

export default VideoList