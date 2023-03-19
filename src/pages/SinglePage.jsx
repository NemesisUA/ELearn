import { useContext, useEffect, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { CoursesContext } from '../hoc/CoursesProvider';
import '../assets/SinglePage.css'
import { CourseVideo } from '../components/CourseVideo';

const SinglePage = () => {  
  const courses  = useContext(CoursesContext || []);
  const id = useParams().id; 
  const [courseById, setCourseById] = useState({});   

  useEffect(() => {
    setCourseById(() => courses.filter(el => el.id === id)[0])
  }, []);
     
  return (
    <main>
      <div className="wrapper">
        <section className='course'>
          <h2 className='course__title'>{courseById?.title}</h2>          
          
          <CourseVideo id={id} courseById={courseById} />

          <h4>Course Lessons: {courseById?.lessonsCount}</h4> 
          <h4>Course Duration, min: {courseById?.duration}</h4> 
          <p>{courseById?.description}</p>     

        </section>
      </div>
    </main>
  )
}

export { SinglePage }