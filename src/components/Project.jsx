import Photo from '../assets/Website.png'
import {Github, ExternalLink} from'lucide-react'

function Project({ref}) {
  return (
    <section className='project-container' ref={ref}>
      <div className="project-start">
        <span className="span-1">01.</span>
        <h3 >Some Things I've Built</h3>
        <div className="start-divider"></div>
      </div>
      <div className='project-body'>
        <div className='projects-grid'>
          
          <div className="project-card">
            <div className='image-div'>
              <img src="https://res.cloudinary.com/dukqtsyt9/image/upload/v1766742288/Screenshot_2025-12-26_150459_cropped_processed_by_imagy_1_kdw34g.png" alt="inkpire img" />
              <div className='overlay'></div>
            </div>
            {/* content area */}
            <div className="project-content">
              <h3>InkSpire</h3>
              <div className='p-description'>
                Inkspirewrite.app is a full‑stack content management platform built with Node.js, Express.js, MongoDB, and React.js. It empowers users to draft, edit, and publish articles seamlessly while ensuring secure access and smooth performance.
              </div>
              <ul className='tech-stack'>
                <li>React</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className='project-links'>
                <a href="https://github.com/Raju00218/inkspire" 
                rel="noopener noreferrer" className='social-icon' ><Github size={20} /></a>
                <a href="https://inkspirewrite.vercel.app/" 
                rel="noopener noreferrer" className='social-icon'><ExternalLink size={20} /></a>
              </div>
            </div>
          </div>




          <div className="project-card-reverse">
            {/* content area */}
            <div className="project-content-reverse">
              <h3>Shopping Hub</h3>
              <div className='p-description2'>
                Developed a responsive e-commerce website with product listings, search functionality, and a shopping cart. Implemented dynamic filtering and sorting to enhance user experience.
              </div>
              <ul className='tech-stacks-reverse'>
                <li>React</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className='project-links-2'>
                <a href="https://github.com/Raju00218/shoppingHub" 
                rel="noopener noreferrer" className='social-icon' ><Github size={20} /></a>
                <a href="https://shoppinghubi.netlify.app/" 
                rel="noopener noreferrer" className='social-icon'><ExternalLink size={20} /></a>
              </div>
            </div>
            {/* img div */}
            <div className='image-div-reverse'>
              <img src="https://res.cloudinary.com/dukqtsyt9/image/upload/v1766741264/Gemini_Generated_Image_d1a9wzd1a9wzd1a9_vsvbrt.png" alt="Shopping hub img" />
              <div className='overlay' ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;