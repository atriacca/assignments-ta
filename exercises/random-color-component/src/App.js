import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
// import Color from './Color.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            color: "",
            color1: "",
            colors: []
        }
    }

    componentDidMount() {
        axios.get("http://www.colr.org/json/color/random")
        .then((response) => {
            this.setState({
                // color1: response.data.colors[0].hex
                color: response.data.colors[0].tags[0].name
            })
            console.log(response.data.colors[0].tags[0].name)
        })
    }

    render (){

        const styles = {
            width: "100vw",
            height: "100vw",
            backgroundColor: `${this.state.color}`,
            // backgroundColor: `#${this.state.color}`,
        }
        console.log(this.state.color)

        // const mappedColors = this.state.colors.map(color => <Color key={color.name} colors={color}/>)

        return (
            <div style={styles}>
            </div>
        )
    }
}
 
export default App