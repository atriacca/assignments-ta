import React from 'react'

const Navbar = props => {
    return (
        <div 
            onClick={props.navToggler}
            className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#projects-header">Projects</a>
            <a href="#contact-header">Contact</a>
        </div>
    )
}

export default Navbar
/*
    <a id="top-header" href="#videos-header">VIDEOS</a>
*/