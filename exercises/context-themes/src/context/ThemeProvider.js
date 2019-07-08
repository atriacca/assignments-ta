import React, { Component } from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
// class ThemeProvider extends React.Component{
    constructor(){
        super()
        this.state = {
        theme: "light"
        }
        // If toggleTheme() is pre-ES6 use "bind"...
        // this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
        }))
    }

    render(){
        return (
            <ThemeContext.Provider 
                value={{
                    theme: this.state.theme, 
                    toggleTheme: this.toggleTheme
                }}>
                { this.props.children }
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        {value => < C {...value} {...props} />}
    </ThemeContext.Consumer>
)

export default ThemeProvider