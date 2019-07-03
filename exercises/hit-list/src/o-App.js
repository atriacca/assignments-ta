import React, { Component } from 'react';
import axios from 'axios'
// import ReactDOM from 'react-dom';
// import './style.css';
// import NewHit from './NewHit'
// import people from './People'
import HitList from './o-HitList'

class App extends Component {
  constructor(){
    super()
      this.state = {
        name: "",
        image: "",
        people: [],
      }
  }
  componentDidMount() {
    const axios = require("axios");
    axios.get("https://vschool-cors.herokuapp.com?url=https://s3.amazonaws.com/v-school/data/hitlist.json").then((response) =>{
        this.setState({people: response.data})
    })
}
render (){
  const mappedNames = this.state.people.map(person => <HitList key={person.name} people={person}/>)

  // const mappedNames = this.state.people.map(name => <HitList key={this.state.hit.name} people={this.state.hit}/>)
  // const mappedNames = this.state.people.map(name => <HitList key={this.state.people.name} name={this.state.people.name} image={this.state.people.image}/>)
  // const mappedNames = this.state.people.map(name => <HitList key={this.state.name} name={this.state.name} image={this.state.image}/>)
// const mappedNames = people.map(person => <HitList key={person.name} hit={person} />)

return (
    <div>
        Names: {mappedNames}
        {/* <NewHit /> */}
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
//const mappedNames = this.state.people.map(name => key={this.state.people.name} name={this.state.people.name} image={this.state.people.image})
