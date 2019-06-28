import React, { Component } from 'react';
import MyForm from './MyForm';
import MyBadge from "./MyBadge";

class MyApp extends Component {
  constructor(){
    super()
    this.state = {
        badges: []
    }
}
handleSubmit(e, data){
  e.preventDefault();
  // make setState take a function so we can get at prevState
    this.setState(prevState => {
      return {badges: prevState.badges}
    })
    this.setState({badges: [data, /* spread prevState badges */]})
}

  render() {
    return (
      <div>
        <h1>Enter your information</h1>
        <MyForm handleSubmit={this.handleSubmit}/>
        <MyBadge {...this.state} />
      </div>
    );
  }
}

export default MyApp;