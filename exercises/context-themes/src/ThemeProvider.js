import React, { Component } from 'react'
import { Provider, Consumer } from './index'

class ThemeProvider extends Component {
// class ThemeProvider extends React.Component{
    constructor(){
        super()
        this.state = {
        theme: "dark"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render(){
        const props = {
            toggleTheme: this.toggleTheme,
            ...this.state
        }

        return (
        //return the theme Provider and it's children
            <Provider value={props}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value}{...props}/>}
    </Consumer>
  )