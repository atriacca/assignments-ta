import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Main = ({theme, toggleTheme}) => (
    <div className={`main ${theme}-main`}>
        <h1>Main Page</h1>
    </div>
)

export default withTheme(Main)