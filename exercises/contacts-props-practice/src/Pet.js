import React from 'react'

// function Pet(props) {
const Pet = props => {
    console.log(props.name)
    return (
        <div className="pet">
            {props.name}, who is a {props.breed}
        </div>
    )
}

export default Pet