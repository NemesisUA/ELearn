import { useContext, useEffect, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { CoursesContext } from '../hoc/CoursesProvider';
import '../assets/SinglePage.css'
import ReactHlsPlayer from 'react-hls-player';
import { LocalStorageService, LS_KEYS} from '../sevices/LocalStorage';

const SinglePage = () => {  
  const courses  = useContext(CoursesContext || []);
  const id = useParams().id; 
  const [courseById, setCourseById] = useState({});   

  useEffect(() => {
    setCourseById(() => courses.filter(el => el.id === id)[0])
  }, []);
  
  // player
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
    <main>
      <div className="wrapper">
        <section className='course'>
          <h2 className='course__title'>{courseById?.title}</h2>          
          
          <div className='course__video'>
            <h4>Video:</h4>
            <ReactHlsPlayer
              playerRef={playerRef}
              onMouseOver = {playVideo}
              onMouseOut = {pauseVideo}              
              //src={courseId.meta.courseVideoPreview.link} 
              src={'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}                    
              poster={courseById?.previewImageLink  + '/cover.webp'}
              autoPlay={false}
              controls={false}
              width="100%"
              height="auto"/> 
          </div> 

          <h4>Course Lessons: {courseById?.lessonsCount}</h4> 
          <h4>Course Duration, min: {courseById?.duration}</h4> 
          <p>{courseById?.description}</p>     

        </section>
      </div>
    </main>
  )
}

export { SinglePage }