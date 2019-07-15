import React, { Component } from 'react'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
        }
        // If a function uses state and is pre-ES6 use "bind"...
        // this.functionName = this.functionName.bind(this)
    }
    render(){
        return(
            <div className="app-container">
                
            </div>
        )
    }
}

export default App