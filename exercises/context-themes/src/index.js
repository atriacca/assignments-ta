import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
export const {Consumer, Provider} = React.createContext()

ReactDOM.render(
    <Provider value={{theme: "dark"}}>
        <App />
    </Provider>,
    document.getElementById("root")
)