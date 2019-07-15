import React, { Component } from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
// class ThemeProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 'light',
            theme: "light"
        }
        // If toggleTheme() is pre-ES6 use "bind"...
        // this.toggleTheme = this.toggleTheme.bind(this)
    }

    // switchTheme = () => {
    //     if (this.value === "white") {
    //         this
    //     } else if (this.value === "light") {
            
    //     }
    //     this.setState({
    //         theme: this.theme
    //     })
    // }
    // toggleTheme = () => {
    //     this.setState(prevState => ({
    //         theme: prevState.theme === "dark" ? "light" : "dark"
    //     }))
    // }
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
  
    handleSubmit = (e) => {
      alert(`You've chosen to view the {this.state.value} theme.`)
      e.preventDefault()
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
/*
    constructor(props) {
        super(props);
        this.state = {value: 'light'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value})
    }
  
    handleSubmit(event) {
      alert(`You've chosen to view the {this.state.value} theme.`)
      event.preventDefault()
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Select a theme to view from the Dropdown menu!
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="white">White Background</option>
                    <option selected value="light">Light Background</option>
                    <option value="dark">Dark Background</option>
                    <option value="black">Black Background</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
  }
*/