import React, { useContext, useEffect, useState } from 'react'
import { CoursesContext } from '../hoc/CoursesProvider'
import '../assets/CoursesPage.css'
import { Card } from '../components/Card.jsx'


const CoursesPage = () => {  
  const courses  = useContext(CoursesContext || []);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const visibleItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  const prevPageHandler = () => {    
    if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
  }

  const nextPageHandler = () => {    
    if (currentPage < totalPages) setCurrentPage(currentPage => currentPage + 1);
  }

  return (
    <main>
     <div className='wrapper'>
      <section className='courses'>
        <h2 className='courses__title'>Choose Your Course:</h2>

        <div className="pagination">
          <span onClick={prevPageHandler}
            className="pagination__arrow">&lt;</span>
          <ul className="pagination__list">
            { pages && 
              pages.map(page => (
                <li 
                  onClick={() => setCurrentPage(page)}
                  key={page}  
                  className={page === currentPage ? 'pagination__item pagination__item_active'
                   : 'pagination__item'}
                >
                  {page}
                </li>
              ))
            }
          </ul>    
          <span onClick={nextPageHandler}
            className="pagination__arrow">&gt;</span>
        </div>

         <ul className='courses__list'>
          { visibleItems && visibleItems.length > 0 &&
            visibleItems.map(item => (             
              <Card 
                key={item.id} 
                title={item.title}
                src={item.previewImageLink}
                lessonsCount={item.lessonsCount}
                rating={item.rating} 
                skills={item.meta.skills} 
              />
            ))
          }
        </ul> 

      </section>
     </div>
    </main>
  )
}

export { CoursesPage }