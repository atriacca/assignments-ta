import React from "react"

function HitList (props) {
    console.log(props.people)

    return (
        <div>
        <h2>{props.people.name}</h2>
        <img width='400' src={props.people.image} alt=''/>
        </div>
    )
}
export default HitList 