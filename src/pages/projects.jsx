import Project from "../components/project";
import PinIt from '../assets/pinit.png';
import reactFitness from '../assets/reactFitness.png';
import spendersense from '../assets/spendersense.png';
import { useEffect, useRef } from "react";
import sr from "../utils/scrollReveal";
import scrollConfig from "../utils/scrollConfig";
import usePrefersReducedMotion from "../utils/usePrefersReducedMotion";

export default function Projects() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
      if (prefersReducedMotion) {
          return;
      }

    sr.reveal(revealContainer.current, scrollConfig());
  }, []);

  const projects = [
    {
      title: "reactFitness",
      image: reactFitness,
      deployedLink: "https://pure-atoll-27810-a712bf2f0891.herokuapp.com/",
      githubLink: "https://github.com/jishyk/React-Fitness.git",
      description: "A fitness application for tracking workouts and meals.",
      tech: "React, Node.js, Express, MongoDB, Mongoose, GraphQL, Javascript, HTML, CSS, Heroku"
    },
    {
      title: "Spender Sense",
      image: spendersense,
      deployedLink: "https://spender-sense.onrender.com/",
      githubLink: "https://github.com/asoto225/income-helper.git",
      description: "A budgeting application for income and expense tracking.",
      tech: "React, Node.js, Express, MongoDB, Mongoose, GraphQL, Javascript, HTML, CSS, Render"
    },
    {
      title: "Pin-It",
      image: PinIt,
      deployedLink: "https://group6-pinit-ed814e5448cb.herokuapp.com",
      githubLink: "https://www.github.com/westonkostura/Project2-PinIt.git",
      description: "A social media platform for sharing favorite locations.",
      tech: "Javascript, HTML, CSS Node.js, Express, MySQL, Sequelize, Handlebars, Heroku"
    }
  ];

  const chunkProjects = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  const projectsInRows = chunkProjects(projects, 3);

  // add a description to each project
  return (
    <div ref={revealContainer}>
      <h1>Projects</h1>
      {projectsInRows.map((row, rowIndex) =>(
      <div key={rowIndex} className="portfolio-container">
        {row.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
      ))}
    </div>
  );
};
