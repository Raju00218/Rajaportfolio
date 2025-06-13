import Photo from '../assets/Website.png'

function Project({ image, applink, title, description, techStack }) {
  return (
    
          <div className="card">
              <img src={image} alt="" />
                <div className="card__content">
              <a className='link' href={applink}>
                 <p className="card__title">{title}</p>
                 <p className="card__description">{description}</p>
          <p className="card_description"> TechStack:{techStack}</p></a>
              </div>
          </div>
  );
}

export default Project;