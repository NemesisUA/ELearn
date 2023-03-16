import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import { ThemeContext } from '../hoc/ThemeProvider';

export const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
      <div className='logo-wrapper'>
            <Link to='/'>
              <div className="logo"></div>
            </Link>
            <h1 className="header__title">CURRENCY CONVERTER</h1>
          </div>
          <nav className="header__navigation">

            <ul className="navigation">
              <li className="navigation__item">
                <Link to='/' className="navigation__link">Home</Link>
              </li>
              <li className="navigation__item">
                <Link to='about' className="navigation__link">About</Link>
              </li>
            </ul>

            <button onClick={toggleTheme}
              className="styled-btn">
              toggle {
                theme === 'light' ? <i className="fa-solid fa-moon" ></i>
                 : <i className="fa-solid fa-sun" ></i>
               } 
            </button>
          </nav>
      </div>
    </header>
  )
}
