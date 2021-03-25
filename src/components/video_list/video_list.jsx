import React from 'react';
import VideoItem from '../video_item/video_item';
import Styles from './video_list.module.css'

const VideoList = ({videos,selectVideo,display}) => {
   const viewDisplay = display === 'list' ? Styles.list : Styles.grid
    
    return(
        <ul className={`${Styles.videoList} ${viewDisplay}`}>
            
            {videos.map(video => (
                (<VideoItem 
                selectVideo = {selectVideo}
                key = {video.id}
                video = {video}
                display = {display}
                />  
            ))
            )
            }

        </ul>
            )
        
}

export default VideoList