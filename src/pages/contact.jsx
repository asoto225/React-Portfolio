import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer";
import ContactUs from "../components/contactForm";
import '../css/contact.css';
import { useEffect, useRef } from "react";
import sr from "../utils/scrollReveal";
import scrollConfig from "../utils/scrollConfig";
import usePrefersReducedMotion from "../utils/usePrefersReducedMotion";

export default function Contact() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
      if (prefersReducedMotion) {
          return;
      }

    sr.reveal(revealContainer.current, scrollConfig());
  }, []);
    return (
      <div ref={revealContainer}>
        {/* <h1>Contact Me!</h1> */}
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
  