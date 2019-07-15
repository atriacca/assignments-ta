import React, { Component } from 'react'
import TodoForm from './TodoForm.js'

class Todo extends Component {
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

        const todoID = this.props._id
        const updatedTodo = {
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

        this.props.updateTodo(todoID, updatedTodo)
    }

    render(){

        return (
            <div className="todo">
            { !this.state.editToggle
                ?
                <>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <img width="200" src={this.props.imgUrl} alt=""/><br/>
                    <button onClick={() => this.props.deleteTodo(this.props._id)}>Delete</button>
                    <button onClick={this.toggler}>Edit</button>
                </>
                :
                <>
                    <TodoForm 
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
                {/* { this.state.editToggle ? "Hi" : "Bye"} */}
            </div>
        )
    }
}

export default Todo