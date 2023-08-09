import React from "react";

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import "./Navbar.css";
import { images } from "../../constants";

const Navbar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.jonesCafe} alt="app logo" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="/home">Home</a></li>
                <li className="p__opensans"><a href="/about">About</a></li>
                <li className="p__opensans"><a href="/menu">Menu</a></li>
                <li className="p__opensans"><a href="/awards">Awards</a></li>
                <li className="p__opensans"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;