import React, { Component } from 'react'
import './style.css'
import Header from './Header.js'
// import ThemeProvider from './ThemeProvider.js'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            value: "",
            theme: ""
        }
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }     
}