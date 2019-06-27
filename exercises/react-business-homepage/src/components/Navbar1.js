import React from "react";

const Navbar = () => {
    return (
      <nav>
        <div className="navBar">
            <div className="services"><a href="./home.html">Home</a></div>
            <div className="services"><a href="./services.html">Services</a></div>
            <div className="contact"><a href="./contact.html">Contact Us</a></div>
        </div>
      </nav>
    )
}

export default Navbar;