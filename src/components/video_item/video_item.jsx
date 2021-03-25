import React, { memo } from 'react';
import Styles from './video_item.module.css'

const VideoItem = memo(
    ({video, video: {snippet}, selectVideo, display}) => 
{   
    const viewDisplay = display === 'list' ? Styles.list : Styles.grid
    return(
                <li className={`${Styles.videoItem} ${viewDisplay}`} onClick= {() => selectVideo(video)}>
                    <img className={Styles.img}
                    src={snippet.thumbnails.medium.url} 
                    alt="youtube-thumbnail"/>
                    <div className={Styles.aboutVideo}>
                        <h3 className={Styles.title}>{snippet.title}</h3>
                        <h4 className={Styles.channelTitle}>{snippet.channelTitle}</h4>
                    </div>

                </li>
            )
            
}
)

export default VideoItem;