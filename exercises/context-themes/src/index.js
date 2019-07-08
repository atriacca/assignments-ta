import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './context/ThemeProvider'

// export const {Consumer, Provider} = React.createContext()
// export const {Consumer, Provider, ThemeProvider} = React.createContext()
// export const {Consumer, ThemeProvider} = React.createContext()

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root"))
/*
<ThemeProvider>
    <App />
</ThemeProvider>,

<Provider value={{theme: "light"}}>
    <App />
</Provider>,
*/