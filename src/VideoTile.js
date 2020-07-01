import React from 'react'

const VideoTile = (props) => {
    const title = props.snippet.title
    const imgUrl  = props.snippet.thumbnails.default.url
    const des = props.snippet.description
    return(
        <div onClick= {()=> props.changeMovie(props)}>
            <h4>{title}</h4>
            <img src={imgUrl}/>
    <h5>{des}</h5>
            {console.log(props)}
            This is my VideoTile
        </div>
    )
}

export default VideoTile;