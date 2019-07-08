import React from 'react'
import { withTheme } from './ThemeProvider'

const Header = ({theme, toggleTheme}) => (
    <div className={`${theme}-header`}>
        <h1>Wicked Rad Header</h1>
        <button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
)
//call withTheme with Header as an argument, and all of the values inside of the Consumer will be available via props

export default withTheme(Header)

// If Header were a class-based component, it would look like this:
// import React, {Component} from 'react';
// import {Consumer} from './index';

// class Header extends Component {
// render(){
//     return (
//       <Consumer>
//       {value => (
//         <div className={`${value.theme}-header`}>
//             <h1>Wicked Rad Header</h1>
//             <button>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
//         </div>
//       )}
//       </Consumer>
//     )
//  }
// }