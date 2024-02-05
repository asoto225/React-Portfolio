import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./header";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

const isActive = (path) => {
    const currentPage = useLocation().pathname;
    return currentPage === path ? 'nav-link active' : 'nav-link';
};
const linkedIcons = {

}

function PortfolioNav() {
    return (
        <Header>
            <nav>
                <section>
                    <ul className="partyLinks">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/abelsoto225"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/asoto225"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </section>
                <ul className="navLinks">
                    <li>
                        {/* <Link to='/' className={isActive('/')}>
                            Home
                        </Link> */}
                        <a href="#home">Home</a>
                    </li>
                    {/* <li>
                        <Link to='/about' className={isActive('/about')}>
                            About
                        </Link>
                    </li> */}
                    <li>
                        {/* <Link to='/projects' className={isActive('/projects')}>
                            Projects
                        </Link> */}
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        {/* <Link to='/contact' className={isActive('/contact')}>
                            Contact
                        </Link> */}
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        {/* <Link to='/resume' className={isActive('/resume')}>
                            Resume
                        </Link> */}
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </Header >
    );
};

export default PortfolioNav;