import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer";
import '../css/contact.css';

export default function Contact() {
    return (
      <div>
        <h1>Contact Me!</h1>
        <p>
        The easiest way to reach me is via email at abelsoto12@hotmail.com.
        </p>
        <p>Below are links to my LinkedIn profile and my GitHub profile.</p> 
        <a href="https://www.linkedin.com/in/abelsoto225/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="linkedInIcon"> <FontAwesomeIcon icon={faLinkedin}/> 
        </a>
        <a href="https://github.com/asoto225"
        target="_blank" 
        rel="noopener noreferrer" 
        className="gitHubIcon"> <FontAwesomeIcon icon={faGithub}/>
        </a>
        <Footer />
      </div>
    );
  }
  