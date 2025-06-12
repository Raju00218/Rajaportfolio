import Vector from './assets/vector.world.jpg'
import ReactLogo from './assets/react.svg'
import Jslogo from './assets/js.png'
import Nodejslogo from './assets/nodejs.png'
function Image() {
  return (
     <section className='img-section'>
              <div className="clip-div">
              <img className="spider-img" src={Vector} alt="spider" />
              </div>
              <div className='card-1'><img src={ReactLogo } alt="React" />
              <p>React is a JavaScript library for building dynamic user interfaces</p>
            </div>
              <div className='card-2'><img src={Jslogo} alt="js" />
              <p>JavaScript is a scripting language used to create interactive web content.</p>
              </div>
              <div className='card-3'>
                <img src={Nodejslogo} alt="" />
              <p>Node.js is a JavaScript runtime that runs code outside the browser.</p>
              </div>
        </section>
  );
}

export default Image;