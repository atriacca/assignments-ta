import React from 'react'

const Die = props => {
        console.log(props.dice.num1)
        for(let i = 0; i < 5; i++){
            console.log(props.dice[i])
            let bgColor = "aqua"
            let dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
            if (props.dice[i] === 1) {
                bgColor = "fuchsia"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8934238.gif)"
            } else if (props.dice[i] === 2) {
                bgColor = "cyan"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8031082.gif)"
            } else if (props.dice[i] === 3) {
                bgColor = "lightgreen"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-1664244.gif)"
            } else if (props.dice[i] === 4) {
                bgColor = "orchid"
                dieImage = "url(https://cdn.clipart.email/1cee826afbbf9c6ff82faf17147ffe9b_dice-clipart-_900-901.gif)"
            } else if (props.dice[i] === 5) {
                bgColor = "crimson"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
            } else if (props.dice[i] === 6) {
                bgColor = "orange"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-six-502642-5779813.gif)"
            } else {
                bgColor = "pink"
                dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
            }
        
            const styles = {
                backgroundSize: "100%",
                width: "50px",
                height: "50px",
                border: "1px solid black",
                display: "inline-block",
                margin: "10px",
                // backgroundColor: bgColor,
                backgroundImage: dieImage,
            }
            
    return (
        <div>
            {/* USING STRINGS */}
            {/* <h1><div>{props.dice.num1}</div></h1>
            <h1><div>{props.dice.num2}</div></h1>
            <h1><div>{props.dice.num3}</div></h1>
            <h1><div>{props.dice.num4}</div></h1>
            <h1><div>{props.dice.num5}</div></h1><br/> */}

            <div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div><br/>

            {/* <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div> */}

            {/* USING AN ARRAY*/}
            <h1>{props.dice[0]}</h1>
            <h1>{props.dice[1]}</h1>
            <h1>{props.dice[2]}</h1>
            <h1>{props.dice[3]}</h1>
            <h1>{props.dice[4]}</h1>

            {/* <h1>Die #1: {props.dice[0]}</h1>
            <h1>Die #2: {props.dice[1]}</h1>
            <h1>Die #3: {props.dice[2]}</h1>
            <h1>Die #4: {props.dice[3]}</h1>
            <h1>Die #5: {props.dice[4]}</h1> */}
        </div>
    )}
}

export default Die