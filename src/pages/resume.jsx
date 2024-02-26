import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import '../css/resume.css';
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef } from "react";
import sr from "../utils/scrollReveal";
import scrollConfig from "../utils/scrollConfig";
import AbelsResume from "../assets/AbelsResume.pdf"

export default function Resume() {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, scrollConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];





  // <ul className="skills-list">
  //   {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
  // </ul>





  return (
    <div ref={revealContainer}>
      <div className="resume">View my <a href={AbelsResume} target="_blank" rel="noopener noreferrer" className="resumeLink">resume<FontAwesomeIcon icon={faFileAlt} /></a></div>
      <h1 className="resumeTitle">Skills</h1>
      <div className="skills">
        <ul className="frontSkills">
          <h2>Frontend</h2> <br />
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>
        <ul className="backSkills">
          <h2>Backend</h2> <br />
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequlize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      {/* <Footer /> */}
    </div>
  );
};