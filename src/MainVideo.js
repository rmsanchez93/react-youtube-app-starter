import React from 'react'

class MainVideo extends React.Component{
    render(){
        // const video = this.props.video
        const { video } = this.props

        const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        return(
        <div>
            <iframe src={embedUrl} />
            <h4> 
                {video.snippet.title}
            </h4>
            <h4>
                {video.snippet.description}
            </h4>
        </div>

        )}
}

export default MainVideo