import React from 'react'

const Form = (props) => {
    // console.log(props)
// class Form extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         birthPlace: "",
    //         phone: "",
    //         favoriteFood: "",
    //         about: ""
    //     }
    // }

    // render() {
    const { firstName, lastName, email, birthPlace, phone, favoriteFood, about, handleSubmit, handleChange } = props

    // const styles = {
    //     display: "grid",
    //     padding: 10,
    //     margin: "auto",
    //     gridTemplateColumns: "1fr 1fr",
    //     gridGap: "10px",
    //     border: "black solid 2px",
    //     width: "60vw",
    //     minWidth: 450,
    // }

    return (
        <form 
        // onSubmit = {(e) => {props.handleSubmit(e, props)}}
        // onSubmit = {(e, data)=>props.handleSubmit(e, props)} style={styles}>
        onSubmit = {(e, data)=>props.handleSubmit(e, props)}>
            {/* <div> */}
            <input className="fName" value={ firstName } name="firstName" onChange={handleChange} placeholder="First name" minlength="3" 
            // required

            // required
            />
            <input className="lName" value={ lastName } name="lastName" onChange={handleChange} placeholder="Last name" minlength="3" 
            // required
            />
            <input className="email" value={ email } name="email" onChange={handleChange} placeholder="Email" minlength="3" 
            // required
            />
            <input className="pob" value={ birthPlace } name="birthPlace" onChange={handleChange} placeholder="Place of birth" minlength="3" 
            // required
            />
            <input className="phone" value={ phone } name="phone" onChange={handleChange} placeholder="Phone number" minlength="3" type="tel" pattern="[0-9]{10}" 
            // required
            />
            <input className="favFood" value={ favoriteFood } name="favoriteFood" onChange={handleChange} placeholder="Favorite food" minlength="3" 
            // required
            />
            {/* </div>
            <div> */}
            <textarea className="about" value={ about } name="about" onChange={handleChange} placeholder="Tell us about yourself"></textarea>
            <button className="button">Submit</button>
            {/* </div> */}
        </form>
    )
    // }
}

export default Form

{/* <form onSubmit={(e)=>props.handleSubmit(e, props)} style={styles}>
            <input value={ props.firstName } name="firstName" onChange={props.handleChange} placeholder="first name"/>
            <input value={ props.lastName } name="lastName" onChange={props.handleChange} placeholder="last name"/>
            <input value={ props.email } name="email" onChange={props.handleChange} placeholder="email"/>
            <input value={ props.birthPlace } name="birthPlace" onChange={props.handleChange} placeholder="place of birth"/>
            <input value={ props.phone } name="phone" onChange={props.handleChange} placeholder="phone number"/>
            <input value={ props.favoriteFood } name="favoriteFood" onChange={props.handleChange} placeholder="favorite food"/>
            <textarea value={ props.about } name="about" onChange={props.handleChange} placeholder="tell us about yourself"></textarea>
            <button>click</button>
        </form>

<form onSubmit={(e)=>this.props.handleSubmit(e, this.state)} style={styles}>
<input value={ this.state.firstName } name="firstName" onChange={this.handleChange} placeholder="first name"/>
<input value={ this.state.lastName } name="lastName" onChange={this.handleChange} placeholder="last name"/>
<input value={ this.state.email } name="email" onChange={this.handleChange} placeholder="email"/>
<input value={ this.state.birthPlace } name="birthPlace" onChange={this.handleChange} placeholder="place of birth"/>
<input value={ this.state.phone } name="phone" onChange={this.handleChange} placeholder="phone number"/>
<input value={ this.state.favoriteFood } name="favoriteFood" onChange={this.handleChange} placeholder="favorite food"/>
<textarea value={ this.state.about } name="about" onChange={this.handleChange} placeholder="tell us about yourself"></textarea>
<button>click</button>
</form> */}