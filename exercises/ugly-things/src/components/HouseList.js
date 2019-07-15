import React from 'react'
import House from './House.js'

const HouseList = props => {

    const mappedHouses = props.houses.map(house => 
                        <House 
                            {...house}
                            deleteHouse={props.deleteHouse} 
                            updateHouse={props.updateHouse} 
                            key={house._id}
                            />)

    return (
        <div>
            { mappedHouses }
        </div>
    )
}

export default HouseList