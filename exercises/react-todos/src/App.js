import React, { Component } from 'react'
import './style.css'
import { withTodos } from './context/TodoProvider.js'
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            description: "",
            imgUrl: ""
        }
    }

    componentDidMount(){
       this.props.getTodos()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const newTodo = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }

        this.setState({
            title: "",
            description: "",
            imgUrl: ""
        })

        this.props.addTodo(newTodo)
    }

    render(){

        return (
            <div>
                <h1>My To Do List...</h1>
                <TodoForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    btnText="Add Todo"
                    {...this.state}
                />
                <div>
                    <TodoList 
                        todos={this.props.todos}
                        deleteTodo={this.props.deleteTodo}
                        updateTodo={this.props.updateTodo}
                    />
                </div>
            </div>
        )
    }
}

export default withTodos(App)