import { Link } from 'react-router-dom'

import React from 'react'

const Footer = () => {
    return (
        <div>
            <Link to="/contact">Contact</Link>
            <Link to="/stuff">Stuff</Link>
            <Link to="/other">Other Stuff</Link>
        </div>
    )
}

export default Footer