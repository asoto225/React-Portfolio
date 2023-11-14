import React from "react";

const Project = ({image, title, deployedLink, githubLink}) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p><strong> Deployed Application:</strong> <a href={deployedLink} target="_blank" rel="noopener noreferrer" >{deployedLink}</a></p>
            <p><strong>GitHub Repository:</strong> <a href={githubLink} target="_blank" rel="noopener noreferrer"></a>{githubLink}</p>
        </div>
    );
};

export default Project;