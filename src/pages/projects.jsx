import Footer from "../components/footer";
import Project from "../components/project";
import Picture from '../assets/dadabase.png';
import PinIt from '../assets/pinit.png';
import JavascriptQuiz from '../assets/javascriptquiz.jpeg';
import reactFitness from '../assets/reactFitness.png';
import spendersense from '../assets/spendersense.png';
import { useEffect, useRef } from "react";
import sr from "../utils/scrollReveal";
import scrollConfig from "../utils/scrollConfig";

export default function Projects() {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, scrollConfig());
  }, []);

  const projects = [
    {
      title: "reactFitness",
      image: reactFitness,
      deployedLink: "https://pure-atoll-27810-a712bf2f0891.herokuapp.com/",
      githubLink: "https://github.com/jishyk/React-Fitness.git",
      description: "this is a project description example"
    },
    {
      title: "Spender Sense",
      image: spendersense,
      deployedLink: "https://spender-sense.onrender.com/",
      githubLink: "https://github.com/asoto225/income-helper.git",
      description: "this is a project description example"
    },
    {
      title: "Pin-It",
      image: PinIt,
      deployedLink: "https://group6-pinit-ed814e5448cb.herokuapp.com",
      githubLink: "https://www.github.com/westonkostura/Project2-PinIt.git",
      description: "this is a project description example"
    },
    // {
    //   title: "Javascript Quiz",
    //   image: JavascriptQuiz,
    //   deployedLink: "https://asoto225.github.io/javascript-quiz/",
    //   githubLink: "https://github.com/asoto225/javascript-quiz.git",
    //   description: "this is a project description example"
    // },
    {
      title: "Dad-A-Base",
      image: Picture,
      deployedLink: "https://rbracker.github.io/breakfastclub-project/",
      githubLink: "https://github.com/rbracker/breakfastclub-project.git",
      description: "this is a project description example"
    },
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
          />
        ))}
      </div>
      ))}
      {/* <Footer /> */}
    </div>
  );
};
