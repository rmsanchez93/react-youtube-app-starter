import React from 'react'

const MainVideo = (props) => {
    const videoId = props.video.id.videoId
    // const { nameitsomething } = propsthatIpassedIN << this is Phyllis' thinking
    const { description, title } = props.video.snippet //this is how to execute, we want matching keys
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div>
            <h2>{title}</h2>
            {console.log(props)}
            <iframe src= {embedUrl}/>
            <h3>{description}</h3>
        </div>
    )
}

export default MainVideo;