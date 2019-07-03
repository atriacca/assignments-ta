import React from 'react'
// import Die from './Die.js'

const DiceBox = props => {
    
            // console.log(dieImages)

            const styles = {
                backgroundSize: "100%",
                width: "50px",
                height: "50px",
                border: "1px solid black",
                display: "inline-block",
                margin: "10px",
                // backgroundColor: bgColor,
                // backgroundImage: props.dieImages[0],
                // backgroundImage: "url(https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif)",
                // backgroundImage: `url(${Background})`
                // backgroundImage: "url(" + Background + ")",
                // backgroundImage: "url(" + "https://dumielauxepices.net/sites/default/files/dice-clipart-five-502664-7383276.gif" + ")",
            }

    return (
        <div>
            <div style={styles} className={props.dieImages[0]}></div>
            <div style={styles} className={props.dieImages[1]}></div>
            <div style={styles} className={props.dieImages[2]}></div>
            <div style={styles} className={props.dieImages[3]}></div>
            <div style={styles} className={props.dieImages[4]}></div>
        </div>
    )
}

export default DiceBox