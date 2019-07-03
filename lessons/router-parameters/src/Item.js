import React from 'react'

const Item = props => {
    // When this component loads it will receive the route paramter (:_id) in the 
    // props.match.params object.  Using the .find() method, we can check our array 
    // of data and find the item that has the matching _id.  From there we just 
    // display the data below.
    const foundItem = props.items.find(item => item._id === props.match.params._id)
     
    return (    
        <div style={{ backgroundColor: foundItem.color }}>
            <h1>{foundItem.type}</h1>
            <p>Size: {foundItem.size}</p>
            <img src={foundItem.imgUrl} width={300}/>
        </div>
    )
}

export default Item