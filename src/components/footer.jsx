import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 Abel's Portfolio. All rights reserved. Hire me! Made with React <FontAwesomeIcon icon={faReact}/></p>
        </footer>
    );
};

export default Footer;