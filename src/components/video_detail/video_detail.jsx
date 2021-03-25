import React from 'react';
import Styles from './video_detail.module.css'

const VideoDetail = ({selectedVideo}) => {
    
    return(
        <div className={Styles.mySelectVideo}>
        <iframe className={Styles.video}
        title="selectedVideo"
        id="ytplayer" 
        type="text/html" 
        width="720" 
        height="405"
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameBorder="0" allowFullScreen></iframe>
        
        <h1>{selectedVideo.snippet.title}</h1>
        <h2>{selectedVideo.snippet.channelTitle}</h2>
        <pre className= {Styles.description}>{selectedVideo.snippet.description}</pre>
        </div>
    )
}
    

export default VideoDetail;