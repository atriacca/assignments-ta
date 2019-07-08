import React, { Component } from 'react'
import { Provider, Consumer } from './index'

export default class componentName extends Component {
    constructor(){
        super()
        this.state = {
            on: false
        }
    }

    changeToggle = () => {
        this.setState(prevState => ({
            on: this.state.on
        })
        )
    }
    
    render() {
        const value = {
            on: this.state.on,
            changeToggle: this.changeToggle
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withToggler = Container => props => (
    <Consumer>
        {value => <Container {...props}{...value}/>}
    </Consumer>
)