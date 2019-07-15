import React, { Component } from 'react'
import HouseForm from './HouseForm.js'

class House extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const houseID = this.props._id
        const updatedHouse = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }

        this.setState({
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
            editToggle: false
        })

        this.props.updateHouse(houseID, updatedHouse)
    }

    render(){

        return (
            <div className="house">
            { !this.state.editToggle
                ?
                <span className="tile">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <button onClick={() => this.props.deleteHouse(this.props._id)}>Delete</button>
                    <button onClick={this.toggler}>Edit</button>
                    <img width="200" src={this.props.imgUrl} alt=""/><br/>
                </span>
                :
                <>
                    <HouseForm 
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        title={this.state.title}
                        description={this.state.description}
                        imgUrl={this.state.imgUrl}
                        btnText="Submit Update"
                    />
                    <button onClick={this.toggler}>Close Edit</button>
                </>
            }
            </div>
        )
    }
}

export default House