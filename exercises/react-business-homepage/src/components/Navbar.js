import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <div className="navBar">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/contact">Contact Us</Link>
            <Link className="navLink" to="/services">Services</Link>
        </div>
      </nav>
    )
}

export default Navbar;