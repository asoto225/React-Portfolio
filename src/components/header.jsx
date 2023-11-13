import React from "react";

const Header = ({ children }) => {
    return (
        <header>
            <h1>Super Cool Header</h1>
                {children}
        </header>
    )
}

export default Header;