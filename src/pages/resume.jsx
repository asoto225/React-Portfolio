import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import '../css/resume.css';
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

export default function Resume() {
    return (
      <div>
        <div className="resume">View my <a href="https://docs.google.com/document/d/1rkdc0B8Obt0FfXiBDWAwaY-eOzwKmZpXgUzLqOBlzY4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resumeLink">resume<FontAwesomeIcon icon={faFileAlt}/></a></div>
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
  }
  