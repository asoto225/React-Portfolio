import React from "react";

const Header = ({ children }) => {
    return (
        <header>
            <h1>Super Cool Header</h1>
            <nav>
                {children}
            </nav>
        </header>
    )
}

export default Header;