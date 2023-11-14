import Footer from "../components/footer";
import Project from "../components/project";

export default function Projects() {
        const projects = [
            {
                title: "Dad-A-Base",
                image: "https://via.placeholder.com/150",
                deployedLink: "https://rbracker.github.io/breakfastclub-project/",
                githubLink: "https://github.com/rbracker/breakfastclub-project.git"
            },
            {
                title: "Pin-It",
                image: "https://via.placeholder.com/150",
                deployedLink: "https://group6-pinit-ed814e5448cb.herokuapp.com",
                githubLink: "https://github.com/westonkostura/Project2-PinIt.git"
            }
        ];
    return (
      <div>
        <h1>Projects</h1>
        <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
        <Footer />
      </div>
    );
  };
  