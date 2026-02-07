import { useState,useRef,useMemo} from 'react'
import NavBar from './components/nav'
import './App.css'
import Projects from './components/Project.jsx'
import Data from './components/projectData.js'
import Form from './components/form.jsx'
import Footer from './components/footer.jsx'
import Resume from './assets/raju_resume_24.pdf' 
import ProjectCard from './components/Cards.jsx'


function App() {

  const projectRef =useRef(null)
  const bioRef = useRef(null)
  const resumeRef = useRef(null)
  const contactref = useRef(null)
 

  function handleClick(){
    const element = projectRef.current;
    if (element) {
      const yOffset = -80; // adjust based on your nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  function bioHandle(){
    const element = bioRef.current;
    if (element) {
      const yOffset = -180; // adjust based on your nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  function resumeHandle() {
    const element = resumeRef.current;
    if (element) {
      const yOffset = -380; // adjust based on your nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  function contactHandle() {
    const element = contactref.current;
    if (element) {
      const yOffset = -100; // adjust based on your nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  const work = useMemo(()=>{
    return Data.map((project) => <ProjectCard
    key={project.id}
      id={project.id}
      github={project.githubLink}
      title={project.title}
      description={project.description}
      applink={project.applink}
      techStack={project.techStack}
      iconName={project.icon}

      />)
  },[Data])

  const handleView =(()=>{
    window.open(Resume, "_blank")
  })
  
  return (
    <>
    <NavBar
    handleClick={handleClick}
    clickBio={bioHandle}
    clickEvent={resumeHandle}
    contact={contactHandle}
    />
<div className='page'>
        <section>
          <div className='dev-name'>
            <p className='her-intro' ref={bioRef} >Hi, my name is</p>
            <h1>Raju.</h1>
            <h2 className='i-do'>I build things for the web.</h2>
            <p className='hero-intro2' >
              I’m a full‑stack software engineer who builds accessible, 
              human‑centered digital products. and I thrive on solving complex problems, 
              designing clean interfaces, and deploying scalable applications that deliver exceptional user experiences.
            </p>
          </div>
        </section>
          <Projects 
          ref={projectRef} />
        <div className="project-cards-container">
          {work}
        </div>
        <div className="project-start">
          <span className="span-1">02.</span>
          <h3 >Resume</h3>
          <div className="start-divider"></div>
        </div>
        <div ref={resumeRef} className='resume-container'>
          <p>Download the Resume here   or   View the Resume</p>
          <div className='button'>
            <a href={Resume} download><button data-id="downloadResume" onclick="gtag('event', 'resume_download');">Download Resume </button></a>
            
            <button onClick={handleView}> View Resume</button>
          </div>
        </div>
        <Form
          ref={contactref}
        />
</div>

     <Footer/>

    </>
  )
}

export default App
