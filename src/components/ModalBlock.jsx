import { useRef} from 'react'
import ReactHlsPlayer from 'react-hls-player';

const ModalBlock = ({ id, closeModal }) => {
  const playerRef = useRef();
   
  return (
    <div className='modal'>
      <div onClick={closeModal}
        className='close-modal'>&#x2715;</div>
        
      <ReactHlsPlayer
        playerRef={playerRef}        
        //src={courseId.meta.courseVideoPreview.link} 
        src={'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}        
        autoPlay={true}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  )
}

export { ModalBlock }