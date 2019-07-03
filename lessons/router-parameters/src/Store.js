import React from 'react'
import { Link } from 'react-router-dom'

const Store = props => {

    const mappedStore = props.items.map(item => {
        return (
            // Every item is a Link with it's "to" prop sending them to the 
            //    /item/:_id route.  The :_id will be filled with the argument ${item._id}
            <Link to={`/item/${item._id}`} key={item.type} >
                <h1 style={{backgroundColor: item.color}}>{item.type}</h1>
            </Link>
        )
    })

    return (
        <div>
            { mappedStore }
        </div>
    )
}

export default Store