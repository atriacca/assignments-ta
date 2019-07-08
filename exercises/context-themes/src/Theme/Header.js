import React from 'react';
import {withTheme} from './ThemeProvider';

const Header = (props) => {
    return (
            <div className={props.theme + "-header"}>
                <h1>Rad Header</h1>
                <button onClick={props.toggleTheme}>{props.theme === "dark" ? "switch to light" : "switch to dark"}</button>
            </div>
        )
};

export default withTheme(Header);