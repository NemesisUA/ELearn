import React, { useContext } from 'react'
import '../assets/Card.css'
import { DynamicStar } from 'react-dynamic-star';
import { ThemeContext } from '../hoc/ThemeProvider'

const Card = (props) => {
  const { title, src, lessonsCount, rating, skills } = props;
  const { theme } = useContext(ThemeContext);  

  return (
    <div className='card'>
      <h3 className='card__title' >{title}</h3>
      <img className='card__image' src={`${src}/cover.webp`} alt="course illustration" />
      <div className="card__info">
        <div className="card__rating-wrapper">
          <p className='card__rating'>Rating: <b>{rating}</b></p>
          {
            <DynamicStar rating={rating} totalStars={5} 
              width={20} height={20} outlined 
              fullStarColor={theme==='light' ? '#FF9900' : '#FFFF66'} />              
          }
        </div>
        <p className='card__lessons-num'>Lessons: <b>{lessonsCount}</b></p>
        <ul className="card__skills-list">
          {skills &&
            skills.map((skill, index) => (
              <li key={index} className='card__skill' >{skill}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export { Card }