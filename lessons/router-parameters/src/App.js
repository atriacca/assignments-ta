import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Store from './Store.js'
import Item from './Item.js'

class App extends Component {
    constructor(){
        super()
        this.state = {
            items: [  // this is simulating data from a database where everything has their own ID.
                {type: "Shirt", color: "blue", size: 11,  imgUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", _id: "428f89f32"},
                {type: "Pants", color: "green", size: 12, imgUrl: "https://images.unsplash.com/photo-1542574621-e088a4464f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=628&q=80", _id: "422v23f32"},
                {type: "Shoes", color: "brown", size: 13, imgUrl: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",  _id: "42cc2333"},
                {type: "Hat",   color: "pink", size: 14,   _id: "f332FFhh2"},
                {type: "Socks", color: "red", size: 15,    _id: "8923v8k"},
                {type: "Tie",   color: "yellow", size: 16, _id: "Ppdv920903"}
            ]
        }
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route 
                        exact path="/" 
                        render={routerProps => <Store {...routerProps} items={this.state.items}/>}/>
                        
                    <Route  // the /:_id is a route parameter, just like a function parameter, it is a 
                            // placeholder for data we feed in as an argument.
                        path="/item/:_id" 
                        render={routerProps => <Item {...routerProps} items={this.state.items}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App