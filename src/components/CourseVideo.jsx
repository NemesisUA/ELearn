import { useRef} from 'react'
import ReactHlsPlayer from 'react-hls-player';
import { LocalStorageService, LS_KEYS} from '../sevices/LocalStorage';

const CourseVideo = ({ id, courseById, onClick }) => {
  const playerRef = useRef();

  function playVideo() {
    const savedVideos = LocalStorageService.get(LS_KEYS.VIDEOS);    
    playerRef.current.currentTime = +savedVideos[id] || 0;
    playerRef.current.play();    
    playerRef.current.controls = true;
  }

  function pauseVideo() {
    playerRef.current.pause();
    playerRef.current.controls = false;
        
    LocalStorageService.set(LS_KEYS.VIDEOS, {
      ...(LocalStorageService.get(LS_KEYS.VIDEOS) || {}),
      [id]: playerRef.current.currentTime 
  });
  }
 
  return (
    <div className='course__video'>
            <h4>Video:</h4>

            <ReactHlsPlayer
              playerRef={playerRef}
              onMouseOver = {playVideo}
              onMouseOut = {pauseVideo} 
              onClick ={onClick}             
              //src={courseId.meta.courseVideoPreview.link} 
              src={'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}                    
              poster={courseById?.previewImageLink  + '/cover.webp'}
              autoPlay={false}
              controls={false}
              width="100%"
              height="auto"/> 
          </div> 
  )
}

export { CourseVideo }