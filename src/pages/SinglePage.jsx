import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CoursesContext } from '../hoc/CoursesProvider';
import '../assets/SinglePage.css'

const SinglePage = () => {  
  const courses  = useContext(CoursesContext || []);
  const id = useParams().id;
  //  {id: "352be3c6-848b-4c19-9e7d-54fe68fef183"}
  console.log('id', id)
  const course = courses.filter(el => el.id === id)[0] || {};
  console.log('course', course)


  return (
    <main>
      <div className="wrapper">
        <section className='course'>
          <h2 className='course__title'>{course.title}</h2>
          
          <h3>video</h3>

          <video width="320" height="240" controls
           poster={course.previewImageLink  + '/cover.webp'} >
          <sourse src={course.meta.courseVideoPreview.link} type="application/x-mpegURL" />
          </video>

        </section>
      </div>
    </main>
  )
}

export { SinglePage }