import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Header = ({theme, toggleTheme}) => (
    <div className={`header ${theme}-header`}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">FAQs</a>
    </div>
)

export default withTheme(Header)