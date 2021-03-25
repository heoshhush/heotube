import { useEffect, useState, useCallback } from 'react';
import SearchVideo from './components/search_video/search_video';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import Styles from './App.module.css'

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (myItem) => {
    setSelectedVideo(myItem)
    console.log({selectedVideo})
  }

  useEffect(() => {
    youtube
    .getPopular()
    .then(videos => setVideos(videos))
  }
  , [youtube]);


  const onSearch = useCallback((query) => {
    setSelectedVideo(null);
    youtube
    .getSearch(query)
    .then(videos => setVideos(videos))
  },[youtube])


  return (
    <section>
          <SearchVideo 
              onSearch = {onSearch}
            />

          <div className= {Styles.container}>

          {selectedVideo && ( 
          <div className={Styles.videoDetail}>
          <VideoDetail 
          selectedVideo = {selectedVideo}

          />}
          </div>)}

              <div className={Styles.videoList}>
            <VideoList 
                videos = {videos}
                display = {selectedVideo ? 'list' : 'grid'}
                selectVideo = {selectVideo}
                />
                </div>
          </div>
    </section>
  )}

export default App;
