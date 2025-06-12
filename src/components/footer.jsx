function footer(props) {
  return (
  <>
      <div className="footer-container">
       <div className="hero">
          <div className="footer">
            <h3>Service</h3>
            <p>Application developer</p>
            <p>Cloude</p>
            <p>WebSite</p>
            <p>Freelance</p>
          </div>
          <div className="footer">
            <h3>Quick links</h3>
            <p><a onClick={props.handleClick} className='navLink' href="#projects">Project</a></p>
            <p> <a onClick={props.clickBio} className='navLink' href="#bio">About</a></p>
            <p><a href="#">RajYt</a></p>
            <p><a onClick={props.contact} className='navLink' href="#Contact">Contact</a></p>
          </div>
          <div className="footer">

          </div>
          <div className="footer"></div>
       </div>
        <div className="rights"><p>CopyRight@{new Date().getFullYear()} Raju | All Rights Reserverd </p></div>
      </div>
  </>
  );
}

export default footer;