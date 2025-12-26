import React from 'react';
import { Layers, Github, ExternalLink,Database, Code, User, Smartphone,Globe } from 'lucide-react';

const IconMap = {
    Layers: Layers,
    Github: Github,
    Database: Database,
    Globe: Globe,
    Code: Code,
    Smartphone: Smartphone,
    User: User
};
const ProjectCard = ({ applink, title, description, techStack, github,iconName}) => {
    const IconComponent = IconMap[iconName] || Globe;
    return (
       <>
            <div className="project-cards">
                <div className="card-header">
                    <div className="folder-icon">
                        <IconComponent size={40} strokeWidth={1} />
                    </div>
                    <div className="external-links">
                        <a href={github} className="social-icon"> <Github size={20}  /></a>
                        <a href={applink} className="social-icon"><ExternalLink size={20} /></a>
                    </div>
                </div>

                <h4 className="project-title">{title}</h4>

                <p className="project-description">
                   {description}
                </p>

                <ul className="card-tech-stack">
                   {techStack.map(tool =>(<li key={tool}>{tool}</li>))}
                </ul>
                <div className='card-overlay'></div>
            </div>
       </>
        
    );
};

export default ProjectCard;