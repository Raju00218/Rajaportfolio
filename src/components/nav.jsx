import Title from '../assets/icons8-r-100.png'
import Twitter from '../assets/twitter-alt.png'
import Linkedin from '../assets/linkedin.png'
import gitHub from '../assets/github.png'
import { useState } from 'react'

function NavBar(props) {
  const [isMenuopen, setIsMenuOpen]= useState(false)
  function menubar(){
    setIsMenuOpen(menuOpen => !menuOpen)
  }
  return (
    <>
    <header>
      <div className="wraper">
        <div className="title-container">
          <img className='' src={Title} alt="Titel" />
        </div>
          <div>
             <div className='about'>
              <a onClick={props.handleClick} className='navLink' href="#projects">Project</a><span></span>
              <a onClick={props.clickBio} className='navLink' href="#bio">About</a><span></span>
              <a onClick={props.contact} className='navLink' href="#Contact">Contact</a><span></span>
              <a onClick={props.clickEvent} className='navLink' href="#Resume">Resume</a>
            </div>
        </div>
          {/* Always visible icons container (for desktop) */}
          <div className={`nav ${isMenuopen ? "open" : ""}`}>
            <a href=""><img className="social" src={Twitter} alt="Twitter" /></a>
            <a href="https://www.linkedin.com/in/-rajualaveni-7893-/" target='_blank'>
              <img className="social" src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Raju00218" target='_blank'>
              <img className="social" src={gitHub} alt="GitHub" />
            </a>
          </div>

          {/* Menu icon only for mobile */}
          <div className="menuIcon" onClick={menubar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>


        </div>
        <div className='divider'></div>
    </header>
    </>
  );
}

export default NavBar;