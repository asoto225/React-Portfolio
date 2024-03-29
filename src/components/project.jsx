import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Project.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ image, title, deployedLink, githubLink, description, tech }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className='eachProject'>
            <h3>{title}</h3>
            <section className="imageContainer">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer"><img src={image} alt={title} className={`imageGif ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} /></a>
            </section>
            <p>{description}</p>
            <p>Tech Used | {tech}</p>
            <p>Github | <a href={githubLink} target="_blank" rel="noopner noreferrer" className="gitHubIcon"><FontAwesomeIcon icon={faGithub}/></a></p>
            {/* <a href={githubLink} target="_blank" rel="noopener noreferrer" className="imageIcon"><FontAwesomeIcon icon={faGithub}/></a> */}
            {/* </section> */}
            {/* <p>Deployed Application: <a href={deployedLink} target="_blank" rel="noopener noreferrer" >{deployedLink}</a></p> */}
        </div>
    );
};

export default Project;