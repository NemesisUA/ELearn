import React from 'react'
import '../assets/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="wrapper footer-wrapper">
            <h4 >Test Task &copy; Mezit Tetyana  
              <a className="github-link"
                href="https://github.com/NemesisUA" target="_blank" 
                rel="noopener noreferrer">
                (my Github)
              </a>
            </h4>
        </div>
    </footer>
  )
}

export { Footer }