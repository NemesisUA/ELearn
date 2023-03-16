import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Header.css';
import Button from './UI/Button';
import { ThemeContext } from '../hoc/ThemeProvider';

export const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <div className='logo-wrapper'>
          <NavLink to='/'>
            <div className="logo"></div>
          </NavLink>
          <span>E</span>
          <h1 className="header__title">-Learn</h1>
        </div>

        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__item">
              <NavLink to='/' className="navigation__link">Courses</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='about' className="navigation__link">About</NavLink>
            </li>
          </ul>

          <Button onClick={toggleTheme}
            className="styled-btn">
            Toggle {
              theme === 'light' ? <i className="fa-solid fa-moon" ></i>
                : <i className="fa-solid fa-sun" ></i>
            }
          </Button>
        </nav>
      </div>
    </header>
  )
}
