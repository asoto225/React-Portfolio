import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer";
import ContactUs from "../components/contactForm";
import '../css/contact.css';

export default function Contact() {
    return (
      <div>
        <h1>Contact Me!</h1>
        <p>
        Please use the form below to send me a message! I will get back to you as soon as possible.
        </p>
        < ContactUs />
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
        {/* <Footer /> */}
      </div>
    );
  }
  