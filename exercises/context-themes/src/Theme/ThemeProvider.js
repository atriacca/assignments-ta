import React, { Component } from 'react'
import {Consumer, Provider} from "./index"

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
export const withTheme = C => props => {
    return () => {
        return (
            <Consumer>
                {(value)=>{
                    return <C {...value} {...props} />
                }}

            </Consumer>
        )
    }
}
export default ThemeProvider