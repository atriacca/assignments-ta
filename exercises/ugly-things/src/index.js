import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import HouseProvider from './context/HouseProvider.js'

ReactDOM.render(
    <HouseProvider>
        <App />
    </HouseProvider>, 
document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))