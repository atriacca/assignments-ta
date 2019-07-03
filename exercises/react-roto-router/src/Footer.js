import { Link } from 'react-router-dom'

import React from 'react'

const Footer = () => {
    return (
        <nav>
            <Link to="/contact">Contact</Link>
            <Link to="/stuff">Stuff</Link>
            <Link to="/more">More Stuff</Link>
        </nav>
    )
}

export default Footer