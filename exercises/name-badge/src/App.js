import React, { Component } from 'react'
import './style.css'
import Form from "./Form"
import Badge from "./Badge"

class App extends Component {
    constructor(){
        super()
        this.state = {
            badges: [],
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            about: "",
        }
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = (e, data) => {
        e.preventDefault()
        const newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            birthPlace: this.state.birthPlace,
            favoriteFood: this.state.favoriteFood,
            about: this.state.about
        }

            // Save the new object along with the existing objects in the array in state.
            // Clear/reset all inputs back to a default state
            this.setState(prevState => ({
                ...prevState.badge,
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                birthPlace: "",
                favoriteFood: "",
                about: "",
                badges: [...prevState.badges, newBadge],
            }))    // setState takes a function so we can get at prevState

            // console.log(this.state.badges)
    }
            
    render() {

        const mappedBadges = this.state.badges.map((badge, i) => 
                <Badge 
                    key={i + badge.firstName} 
                    firstName={badge.firstName}
                    lastName={badge.lastName}
                    email={badge.email}
                    birthPlace={badge.birthPlace}
                    phone={badge.phone}
                    favoriteFood={badge.favoriteFood}
                    about={badge.about}
                    />)

                    // console.log(mappedBadges)
                    
        return (
            <div>
                <h1>Enter your information</h1>
                <Form 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    birthPlace={this.state.birthPlace}
                    phone={this.state.phone}
                    favoriteFood={this.state.favoriteFood}
                    about={this.state.about}
                    />

                {mappedBadges}
            </div>
        )
    }
}

export default App