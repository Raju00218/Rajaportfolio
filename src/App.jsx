import { useState,useEffect,useRef,useMemo} from 'react'
import NavBar from './components/nav'
import './App.css'
import ClipathImage from './Clippath.jsx'
import Projects from './components/Project.jsx'
import Data from './components/projectData.js'
import About from './components/bio.jsx'
import Form from './components/form.jsx'
import Footer from './components/footer.jsx'


function App() {
  const [showWord, setShowWord] = useState("")
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const projectRef =useRef(null)
  const bioRef = useRef(null)
  const resumeRef = useRef(null)
  const contactref = useRef(null)
  const words = ["I Am Software developer", "I Build web application", "I love Scripting language",]

  useEffect(() => {

    const currentWord = words[wordIndex % words.length]; // use modulo to loop words

    if (charIndex < currentWord.length) {
      const typing = setTimeout(() => {
        setShowWord(prev => prev + currentWord[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(typing); // ✅ clear the timeout on cleanup
    } else {
      const pause = setTimeout(() => {
        setShowWord(""); // clear word
        setCharIndex(0); // reset to first character
        setWordIndex(prev => (prev + 1) % words.length); // move to next word
      }, 1000);

      return () => clearTimeout(pause); // ✅ clear pause if effect runs again
    }
  }, [charIndex, wordIndex]);


  function handleClick(){
    const element = projectRef.current;
    if (element) {
      const yOffset = -180; // adjust based on your nav height
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
    return Data.map((project)=> <Projects
    key={project.id}
      id={project.id}
      image={project.imgUrl}
      title={project.title}
      description={project.description}
      applink={project.applink}
      techStack={project.techStack}

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
            <h1> Hey I Am Raju | Frontend Developer </h1>
            <p>I build clean, interactive UIs using React and JavaScript.</p>
            <div className='typing'>
              <p>{showWord}</p><span className="line"></span>
            </div>
          </div>
        </section>
        <ClipathImage />
        <About
          ref={bioRef}
        />
        <section className='sec-prj'>
          <div className='lable'> <h2>🎉Project</h2></div>
          <div ref={projectRef} className='card-container'>{work}</div>
        </section>
        <div ref={resumeRef} className='resume-container'>
          <h2>📑Resume</h2>
          <p>Download the Resume here   or   View the Resume</p>
          <div className='button'>
            <a href={Resume} download><button data-id="downloadResume">Download Resume </button></a>
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
