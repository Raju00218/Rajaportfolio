import Title from '../assets/Title icon.png'
import Twitter from '../assets/twitter-alt.png'
import Linkedin from '../assets/linkedin.png'
import gitHub from '../assets/gitHub.png'

function NavBar(props) {
  return (
    <>
    <header>
      <div className="wraper">
        <div className="title-container">
          <img className='' src={Title} alt="Titel" />
          <h2>RAJU</h2>
        </div>
        <div className='about'>
            <a onClick={props.handleClick}className='navLink' href="#projects">Project</a><span></span>
            <a onClick={props.clickBio} className='navLink' href="#bio">About</a><span></span>
            <a onClick={props.contact} className='navLink' href="#Contact">Contact</a><span></span>
            <a onClick={props.clickEvent} className='navLink' href="#Resume">Resume</a>
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