import { useContext, useEffect, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { CoursesContext } from '../hoc/CoursesProvider';
import '../assets/SinglePage.css'
import Button  from '../components/UI/Button'
import { CourseVideo } from '../components/CourseVideo';
import { createPortal } from 'react-dom';
import { ModalBlock} from '../components/ModalBlock'

const SinglePage = () => {  
  const courses  = useContext(CoursesContext || []);
  const id = useParams().id; 
  const [courseById, setCourseById] = useState({});  
  
  const [showModal, setShowModal] = useState(false);
  const modalRootEl = document.getElementById('modal-root');

  const handleModalCall = () => {
    setShowModal(true);  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  useEffect(() => {
    setCourseById(() => courses.filter(el => el.id === id)[0])
  }, []);
     
  return (
    <main>
      <div className="wrapper">
        <section className='course'>
          <Link to="/"><Button>Go home</Button></Link>
          <h2 className='course__title'>{courseById?.title}</h2>

          < CourseVideo onClick={handleModalCall}
           id={id} courseById={courseById} />

          { showModal && createPortal(
            < ModalBlock
              closeModal={handleModalClose}             
              id={id} className='modal' />, 
              modalRootEl )
          }
          
          <h4>Course Lessons: {courseById?.lessonsCount}</h4> 
          <h4>Course Duration, min: {courseById?.duration}</h4> 
          <p>{courseById?.description}</p>
        </section>
      </div>
    </main>
  )
}

export { SinglePage }