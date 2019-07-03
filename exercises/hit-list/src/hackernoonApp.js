import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
//https://hackernoon.com/tutorial-how-to-make-http-requests-in-react-part-3-daa6b31b66be

class App extends Component {
    constructor() {
      super();
      this.state = {
        error: null,
        name: "",
        image: ""
      }
      this.handleClick = this.handleClick.bind(this)
    }
  // https://api.github.com/users/maecapozzi
    handleClick () {
      axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
        .then(response => this.setState({name: response.data.name}))
    }
  
    render() {
      return (
        <div className='button_container'>
          <button className='button' onClick={this.handleClick}>Click me</button>
          <p>{this.state.name}</p>
        </div>
      )
    }
  }
export default App;
