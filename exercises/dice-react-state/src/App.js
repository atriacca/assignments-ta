import React, { Component } from 'react'
import DiceBox from './DiceBox.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            dice: [],
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    // USING STRINGS
    // randomDie = () => {
    //     this.setState({
    //         num1: Math.floor(Math.random() * 6) + 1,
    //         num2: Math.floor(Math.random() * 6) + 1,
    //         num3: Math.floor(Math.random() * 6) + 1,
    //         num4: Math.floor(Math.random() * 6) + 1,
    //         num5: Math.floor(Math.random() * 6) + 1
    //     })
    //     // console.log(this.state)
    // }

    // USING AN ARRAY
    randomDie = () => {
        let roll = this.state.dice
        for(let i = 0; i < 5; i++){
            roll[i] = Math.floor(Math.random() * 6) + 1
        }
        // console.log(roll)
        this.setState({
            dice: roll
        })
        // console.log(this.state.dice)
    }

    render(){
        return (
            <div>

                <button onClick={this.randomDie}>Roll the dice</button>

                {/* USING STRINGS */}
                {/* <DiceBox dice={this.state}/> */}

                {/* USING AN ARRAY */}
                <DiceBox dice={this.state.dice}/>

            </div>
        )
    }
}

export default App