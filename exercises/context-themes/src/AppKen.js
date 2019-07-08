import React from 'react'
import { withToggler } from './TogglerKen'

function AppKen(props) {

    return (
        <div>
            <h3>Toggle status:{props.on ? 'ON' : 'OFF'}</h3>
            <button onClick={props.changeToggle}>Toggle</button>
        </div>
    )
}

export default AppKen

/* This example does the same but uses "Hooks"...

import React, { useState } from 'react'

function AppKen(props) {

    const [toggle, useToggle] = useState(false)
    return (
        <div>
            <h3>Toggle status:{toggle ? 'ON' : 'OFF'}</h3>
            <button onClick={() => useToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default AppKen
*/