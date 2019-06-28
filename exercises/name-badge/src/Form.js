import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favortiteFood: "",
            about: ""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "10px",
            border: "black solid 2px"
        }
        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e, this.state)} style={styles}>
                <input value={ this.state.firstName } name="firstName" onChange={this.handleChange} placeholder="first name"/>
                <input value={ this.state.lastName } name="lastName" onChange={this.handleChange} placeholder="last name"/>
                <input value={ this.state.email } name="email" onChange={this.handleChange} placeholder="email"/>
                <input value={ this.state.birthPlace } name="birthPlace" onChange={this.handleChange} placeholder="place of birth"/>
                <input value={ this.state.phone } name="phone" onChange={this.handleChange} placeholder="phone number"/>
                <input value={ this.state.favortiteFood } name="favortiteFood" onChange={this.handleChange} placeholder="favorite food"/>
                <textarea value={ this.state.about } name="about" onChange={this.handleChange} placeholder="tell us about yourself"></textarea>
                <button>click</button>
            </form>
        );
    }
}

export default Form;