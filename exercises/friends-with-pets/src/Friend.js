import React from 'react'
import Pet from './Pet.js'

// function Friend(props) {
const Friend = props => {
    const mappedPets = props.pets.map((pet, i) => 
            <Pet 
                key={i + pet} 
                name={pet.name}
                breed={pet.breed}
            />)
        return (
        <div className="friends">
            <h3>{props.name} has {props.pets.length} pets:</h3>
            {mappedPets}
        </div>
    )
}

export default Friend