import React from 'react';
import {Consumer} from './index';


const Header = () => {
    return (
        <Consumer>
            { (value) => {
                return (
            <div className={value.theme + "-header"}>
                <h1>Rad Header</h1>
                <button onClick={value.toggleTheme}>{value.theme === "dark" ? "switch to light" : "switch to dark"}</button>
            </div>
        )
    } }
        </Consumer>
    );
};

export default Header