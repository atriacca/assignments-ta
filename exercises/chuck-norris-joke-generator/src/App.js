import React, { Component } from "react"
import './style.css'
import axios from 'axios'


class App extends Component {
    constructor(){
        super()
        this.state = {
            joke: ""
        }
    }

    componentDidMount = () => {
        axios.get("http://api.icndb.com/jokes/random")
            .then(res => {
                this.setState({
                    joke: res.data.value.joke
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <button onClick={this.componentDidMount}>New Joke</button><br/>
                <h1>{this.state.joke}</h1>
            </div>
        )
    }
}

export default App