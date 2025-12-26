
function NavBar(props) {
  return (
    <>
    <header>
      <div className="wraper">
        <div className="title-container">
            <h1> RJ.</h1>
        </div>
          <div>
             <div className='about'>
              <a onClick={props.handleClick} className='navLink' href="#projects">Project</a><span></span>
              <a onClick={props.clickBio} className='navLink' href="#bio">About</a><span></span>
              <a onClick={props.contact} className='navLink' href="#Contact">Contact</a><span></span>
              <a onClick={props.clickEvent} className='navLink' href="#Resume">Resume</a>
            </div>
        </div>
      </div>
       
        <div className='divider'></div>
    </header>
    </>
  );
}

export default NavBar;