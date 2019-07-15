import React from 'react'
import { withTheme } from '../context/ThemeProvider'

const Main = ({theme, toggleTheme}) => (
    <div className={`main ${theme}-main`}>
        <h2>{theme === "dark" ? "Click the button to view the Light theme!" : "Click the button to view the Dark theme!"}</h2>
        <button className={`${theme}-button`} onClick={toggleTheme}>{theme === "dark" ? "Toggle Theme to Light" : "Toggle Theme to Dark"}</button>
        <select>
        {/* <select value={this.state.value} onChange={this.handleChange}> */}
            <option value="white">White Background</option>
            <option selected value="light">Light Background</option>
            <option value="dark">Dark Background</option>
            <option value="black">Black Background</option>
        </select>
    </div>
)

export default withTheme(Main)