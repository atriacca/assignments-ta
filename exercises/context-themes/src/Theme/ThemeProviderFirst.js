import React, { Component } from 'react'
import {Provider} from "./index"

class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: "dark"
        }
    }
    toggleTheme = () => {
        this.setState(prevState => {
            return {theme: prevState.theme === "dark" ? "light" : 'dark'}
        })
    }
    render() {
        const props = {
            ...this.state, 
            toggleTheme: this.toggleTheme
        }
            return (
            <Provider value={props}>
                { this.props.children }
            </Provider>
        );
    }
}
export default ThemeProvider