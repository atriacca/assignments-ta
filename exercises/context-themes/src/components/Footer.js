import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Footer = ({theme, toggleTheme}) => (
    <div className={`footer ${theme}-footer`}>
        <a href="/">Contact Us</a>
        <a href="/">Investor Info</a>
        <a href="/">Other stuff</a>
    </div>
)

export default withTheme(Footer)
/* 
<h3>Contact Us</h3>
<h3>Investor Info</h3>
<h3>Other stuff</h3>

<ul>
    <li>Contact Us</li>
    <li>Investor Info</li>
    <li>Other stuff</li>
</ul> 
*/