import React from 'react'

function Box(props) {
    return (
        <div className={`${props.boxClass}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default Box