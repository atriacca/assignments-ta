import React from 'react';
import {Consumer} from './index';

const Header = props => (
//Consumer exposes its value through props.children
    <Consumer>
        {value => (
            <div className={`${value.theme}-header`}>
                <h1>Wicked Rad Header</h1>
                <button>{value.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
            </div>
        )}
    </Consumer>
)
export default Header

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