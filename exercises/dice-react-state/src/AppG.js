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
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8934238.gif")`
                } else if (roll[i] === 2) {
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8031082.gif")`
                } else if (roll[i] === 3) {
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-1664244.gif")`
                } else if (roll[i] === 4) {
                    dieImage[i] = `url("https://cdn.clipart.email/1cee826afbbf9c6ff82faf17147ffe9b_dice-clipart-_900-901.gif")`
                } else if (roll[i] === 5) {
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif")`
                } else if (roll[i] === 6) {
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-six-502642-5779813.gif")`
                } else {
                    dieImage[i] = `url("https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif")`
                }
                // console.log(this.state.dieImages)
                // console.log(this.state.dice)

        // console.log(roll)
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

                {/* USING STRINGS */}
                {/* <DiceBox dice={this.state}/> */}

                {/* USING AN ARRAY */}
                <DiceBox dice={this.state.dice} dieImages={this.state.dieImages}/>

            </div>
        )
    }
}

export default App