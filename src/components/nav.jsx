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
          <div className='menuIcon'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg> */}
             <div className='about'>
              <a onClick={props.handleClick} className='navLink' href="#projects">Project</a><span></span>
              <a onClick={props.clickBio} className='navLink' href="#bio">About</a><span></span>
              <a onClick={props.contact} className='navLink' href="#Contact">Contact</a><span></span>
              <a onClick={props.clickEvent} className='navLink' href="#Resume">Resume</a>
            </div>
        </div>
        <div className='nav'>
            <a href=""><img className='social' src={Twitter} alt="twitter" /></a>
            <a href="https://www.linkedin.com/in/-rajualaveni-7893-/" target='_blank'><img className='social' src={Linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/Raju00218" target='_blank'><img className='social' src={gitHub} alt="gitHub" /></a>
        </div>
      </div>
        <div className='divider'></div>
    </header>
    </>
  );
}

export default NavBar;