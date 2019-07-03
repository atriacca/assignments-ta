import React from 'react'
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
import NewHit from './o-NewHit'
import axios from 'axios'
import HitList from './o-HitList'

  class App extends React.Component {
  constructor(){
    super()
      this.state = {
          people: [],
          name: "",
          image: ""
      }
  }

// use handleClick for quotes 
  componentDidMount() {
    const axios = require("axios");
    axios.get("https://vschool-cors.herokuapp.com?url=https://s3.amazonaws.com/v-school/data/hitlist.json").then((response) =>{
        this.setState({people: response.data})
    })
}
render() {

  // const mappedNames = people.map(person => <HitList key={person.name} hit={person} />)
  const mappedNames = this.state.people.map(person => <HitList key={this.state.person.name} hit={this.state.person}/>)
  
  return (
      <div>
          Names: {mappedNames}
          <NewHit />
      </div>
    )
}
}
 
export default App

  // class App extends React.Component {
  // constructor(){
  //   super()
  //     this.state = {
  //         people: [],
  //         name: "",
  //         image: ""
  //     }
  // }
  // componentDidMount() {
  //   const axios = require("axios");
  //   axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then((response) =>{
  //      console.log(response.data);
  //   })
  // }

  //const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
// const mappedNames = people.map(person => <HitList key={person.name} hit={person} />)
// const mappedNames = this.state.people.map(name => key={this.state.people.name} name={this.state.people.name} image={this.state.people.image})
