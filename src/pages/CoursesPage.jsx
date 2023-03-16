import React, { useContext } from 'react'
import { CoursesContext } from '../hoc/CoursesProvider'
import '../assets/CoursesPage.css'
import { Card } from '../components/Card.jsx'

const CoursesPage = () => {
  const courses = useContext(CoursesContext || []);
  console.log('courses:', courses)

  return (
    <main>
     <div className='wrapper'>
      <section className='courses'>
        <h2 className='courses__title'>Choose Your Course:</h2>
        <ul className='courses__list'>
          { courses && courses.length > 0 &&
            courses.map(item => (             
              <Card 
                key={item.id} 
                title={item.title}
                src={item.previewImageLink}
                lessonsCount={item.lessonsCount}
                rating={item.rating} 
                skills={item.meta.skills} />
            ))
          }
        </ul>
      </section>
     </div>
    </main>
  )
}

export { CoursesPage }