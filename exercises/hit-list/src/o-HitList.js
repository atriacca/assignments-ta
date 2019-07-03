import React from "react"

function HitList (props) {

    return (
        <div>
        <h2>{props.name}</h2>
        <img width='400' src={props.image} alt=''/>
        </div>
    )
}
export default HitList 