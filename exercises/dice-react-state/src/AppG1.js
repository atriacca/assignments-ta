import React, { Component } from 'react'
import DiceBox from './DiceBox.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            dice: [],
            dieImages: [],
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
        let dieImage = this.state.dieImages

        for(let i = 0; i < 5; i++){
            roll[i] = Math.floor(Math.random() * 6) + 1

                if (roll[i] === 1) {
                    dieImage[i] = "die1"
                } else if (roll[i] === 2) {
                    dieImage[i] = "die2"
                } else if (roll[i] === 3) {
                    dieImage[i] = "die3"
                } else if (roll[i] === 4) {
                    dieImage[i] = "die4"
                } else if (roll[i] === 5) {
                    dieImage[i] = "die5"
                } else if (roll[i] === 6) {
                    dieImage[i] = "die6"
                } else {
                    dieImage[i] = "die0"
                }
                // console.log(this.state.dieImages)

        this.setState({
            dice: roll,
            dieImages: dieImage
        })
    }
        // console.log(this.state.dieImages)
    }

    render(){
        return (
            <div>

                <button onClick={this.randomDie}>Roll the dice</button>
                
                {/* <div className="die die0"></div> */}

                {/* USING STRINGS */}
                {/* <DiceBox dice={this.state}/> */}

                {/* USING AN ARRAY */}
                <DiceBox dice={this.state.dice} dieImages={this.state.dieImages}/>

            </div>
        )
    }
}

export default App