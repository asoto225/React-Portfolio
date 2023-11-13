import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./header";
import "../App.css";

const isActive = (path) => {
    const currentPage = useLocation().pathname;
    return currentPage === path ? 'nav-link active' : 'nav-link';
};

function PortfolioNav() {
    return (
    <Header>
        <nav>
            <ul>
                <li>
                    <Link to='/' className={isActive('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' className={isActive('/about')}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/projects' className={isActive('/projects')}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className={isActive('/contact')}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/resume' className={isActive('/resume')}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    </Header >
    );
};

export default PortfolioNav;