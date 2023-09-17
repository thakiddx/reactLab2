import React from "react";
import NavbarButton from '../navbarButton/NavbarButton.jsx';

function NavBar() {
    return (
        <nav>
            <NavbarButton text="Button 1" />
            <NavbarButton text="Button 2" />
            <NavbarButton text="Button 3" />
            <NavbarButton text="Button 4" />
        </nav>
    );
}


export default NavBar;