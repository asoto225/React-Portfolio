import Footer from "../components/footer";
import Project from "../components/project";
import Picture from '../assets/dadabase.png';
import PinIt from '../assets/pinit.png';
import JavascriptQuiz from '../assets/javascriptquiz.jpeg';
import reactFitness from '../assets/reactFitness.png';

export default function Projects() {
  const projects = [
    {
      title: "reactFitness",
      image: reactFitness,
      deployedLink: "https://pure-atoll-27810-a712bf2f0891.herokuapp.com/",
      githubLink: "https://github.com/jishyk/React-Fitness.git",
    },
    {
      title: "Pin-It",
      image: PinIt,
      deployedLink: "https://group6-pinit-ed814e5448cb.herokuapp.com",
      githubLink: "https://www.github.com/westonkostura/Project2-PinIt.git",
    },
    {
      title: "Javascript Quiz",
      image: JavascriptQuiz,
      deployedLink: "https://asoto225.github.io/javascript-quiz/",
      githubLink: "https://github.com/asoto225/javascript-quiz.git"
    },
    {
      title: "Dad-A-Base",
      image: Picture,
      deployedLink: "https://rbracker.github.io/breakfastclub-project/",
      githubLink: "https://github.com/rbracker/breakfastclub-project.git"
    },
  ];

  const chunkProjects = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  const projectsInRows = chunkProjects(projects, 3);

  
  return (
    <div>
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
          />
        ))}
      </div>
      ))}
      <Footer />
    </div>
  );
};
