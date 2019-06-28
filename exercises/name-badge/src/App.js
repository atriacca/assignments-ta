import React, { Component } from 'react';
import Form from "./Form";
import Badge from "./Badge";

class App extends Component {
  constructor(){
    super()
    this.state = {
        badges: []
    }
}

handleSubmit(e, data){
  e.preventDefault();
  // make setState take a function so we can get at prevState
  this.setState({badges: [data, /* spread prevState badges */]})
}

  render() {
    return (
      <div>
        <h1>Enter your information</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <Badge {...this.state} />
      </div>
    );
  }
}

export default App;
