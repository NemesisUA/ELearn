import React from 'react'
import '../assets/Card.css'

const Card = (props) => {
  const { title, src, lessonsCount, rating, skills } = props;
  return (
    <div className='card'>
      <h3 className='card__title' >{title}</h3>
      <img className='card__image' src={`${src}/cover.webp`} alt="course illustration" />
      <div className="card__info">
        <p className='card__rating'>Rating: <b>{rating}</b></p>
        <p className='card__lessonsNum'>Lessons: <b>{lessonsCount}</b></p>
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