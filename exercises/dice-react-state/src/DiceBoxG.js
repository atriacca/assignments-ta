import React from 'react'
// import Die from './Die.js'

const DiceBox = props => {

        // let dieImage = "die1"
        // switch(props.dice) {
        //     case 1:
        //     dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8934238.gif)"
        //     break
        //     case 2:
        //     dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8031082.gif)"
        //     break
        //     case 3:
        //     dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-1664244.gif)"
        //     break
        //     case 4:
        //     dieImage = "url(https://cdn.clipart.email/1cee826afbbf9c6ff82faf17147ffe9b_dice-clipart-_900-901.gif)"
        //     break
        //     case 5:
        //     dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
        //     break
        //     case 6:
        //     dieImage = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-six-502642-5779813.gif)"
        //     break
        //     default:
        //     dieImage = "die9"
        //     }

        // let dieImage = []
        // for(let i = 0; i < 5; i++){
        //     // console.log(props.dice[i])
        //     if (props.dice[i] === 1) {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8934238.gif)"
        //     } else if (props.dice[i] === 2) {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-8031082.gif)"
        //     } else if (props.dice[i] === 3) {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-single-502631-1664244.gif)"
        //     } else if (props.dice[i] === 4) {
        //         dieImage[i] = "url(https://cdn.clipart.email/1cee826afbbf9c6ff82faf17147ffe9b_dice-clipart-_900-901.gif)"
        //     } else if (props.dice[i] === 5) {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
        //     } else if (props.dice[i] === 6) {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-six-502642-5779813.gif)"
        //     } else {
        //         dieImage[i] = "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)"
        //     }
            // console.log(dieImage[i])

            const styles = {
                backgroundSize: "100%",
                width: "50px",
                height: "50px",
                border: "1px solid black",
                display: "inline-block",
                margin: "10px",
                // backgroundColor: bgColor,
                backgroundImage: props.dieImages[0],
                // backgroundImage: "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)",
                // backgroundImage: `url(${Background})`
                // backgroundImage: "url(" + Background + ")",
                // backgroundImage: "url(" + "https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif" + ")",
            }

            const styles1 = {
                backgroundSize: "100%",
                width: "50px",
                height: "50px",
                border: "1px solid black",
                display: "inline-block",
                margin: "10px",
            }
            
            console.log(props.dieImages)
            console.log(props.dieImages[1])
            console.log(props.dieImages[2])
            console.log(props.dieImages[3])
            console.log(props.dieImages[4])

    return (
        <div>
            {/* <Die dice={this.state.dice} /> */}

            {/* USING STRINGS */}
            {/* <h1><div>{props.dice.num1}</div></h1>
            <h1><div>{props.dice.num2}</div></h1>
            <h1><div>{props.dice.num3}</div></h1>
            <h1><div>{props.dice.num4}</div></h1>
            <h1><div>{props.dice.num5}</div></h1><br/> */}
            {/* {console.log(props.dieImages[1])} */}
            <h1>{props.dice[0]}</h1>
            <h1>{props.dice[1]}</h1>
            <h1>{props.dice[2]}</h1>
            <h1>{props.dice[3]}</h1>
            <h1>{props.dice[4]}</h1>
            <br/>

            <div style={styles} backgroundimage="{dieImages[0]}"></div>
            <div style={styles} backgroundimage="{dieImages[1]}"></div>
            <div style={styles} backgroundimage="{dieImages[2]}"></div>
            <div style={styles} backgroundimage="{dieImages[3]}"></div>
            <div style={styles} backgroundimage="{dieImages[4]}"></div>
            {/* <div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div>
            <div style={styles}></div> */}
            <br/>

            {/* <div style={styles1} backgroundimage="{dieImage[0]}"></div>
            <div style={styles1} backgroundimage="{dieImage[1]}"></div>
            <div style={styles1} backgroundimage="{dieImage[2]}"></div>
            <div style={styles1} backgroundimage="{dieImage[3]}"></div>
            <div style={styles1} backgroundimage="{dieImage[4]}"></div> */}
            {/* <div style={{border: "1px solid green", width: "50px", height: "50px", backgroundSize: "100%", backgroundImage:`url("https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif")`}}></div> */}

            {/* <div style={styles1} backgroundImage={props.dieImages[0]}></div>
            <div style={styles1} backgroundimage="{props.dieImages[1]}"></div>
            <div style={styles1} backgroundimage="{props.dieImages[2]}"></div>
            <div style={styles1} backgroundimage="{props.dieImages[3]}"></div>
            <div style={styles1} backgroundimage="{props.dieImages[4]}"></div> */}
            <br/>


            {/* <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div>
            <div className="{dieImage}"></div> */}

            {/* USING AN ARRAY*/}
            {/* <h1>{props.dice[0]}</h1>
            <h1>{props.dice[1]}</h1>
            <h1>{props.dice[2]}</h1>
            <h1>{props.dice[3]}</h1>
            <h1>{props.dice[4]}</h1> */}

            {/* <h1>Die #1: {props.dice[0]}</h1>
            <h1>Die #2: {props.dice[1]}</h1>
            <h1>Die #3: {props.dice[2]}</h1>
            <h1>Die #4: {props.dice[3]}</h1>
            <h1>Die #5: {props.dice[4]}</h1> */}
        </div>
    )
}

export default DiceBox