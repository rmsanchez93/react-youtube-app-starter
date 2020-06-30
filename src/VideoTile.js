import React from 'react'

class VideoTile extends React.Component{
    render(){
        return(
        <div onClick={() => this.props.changeVideo(this.props.video)}>
            <h4>{this.props.video.snippet.title}</h4>
            <img src={this.props.video.snippet.thumbnails.default.url} />
        </div>

        )}
}

export default VideoTile