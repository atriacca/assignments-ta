import React, { Component } from 'react'
import axios from 'axios'
// import ReactDOM from 'react-dom'
// import './style.css'
// import NewHit from './NewHit'
// import people from './People'
import HitList from './HitList'

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
        axios.get("https://vschool-cors.herokuapp.com?url=https://s3.amazonaws.com/v-school/data/hitlist.json")
            .then((response) => {this.setState({people: response.data})
        })
        console.log(this.people)
    }

    render (){

        const mappedNames = this.state.people.map(person => <HitList key={person.name} people={person}/>)

        return (
            <div>
                Names: {mappedNames}
                {/* <NewHit /> */}
            </div>
        )
    }
}
 
export default App