import Photo from '../assets/Website.png'

function Project(props) {
  return (
    
          <div className="card">
              <img src={props.image} alt="" />
                <div className="card__content">
              <a className='link' href={props.applink}>
                 <p className="card__title">{props.title}</p>
                 <p className="card__description">{props.description}</p></a>
              </div>
          </div>
  );
}

export default Project;