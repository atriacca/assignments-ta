import React from 'react'

const Box = props => {
    const boxStyle = {
        backgroundColor: props.color
    }
    return (
        <div className="box" style={boxStyle}>

        </div>
    )
}

export default Box