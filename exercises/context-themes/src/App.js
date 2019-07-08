import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import './style.css'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import { withTheme } from './context/ThemeProvider'

const App = (props) => {
    return (
        <div className={`${props.theme}-app`}>
            <Header /> 
            <button className={`${props.theme}-button`} onClick={props.toggleTheme}>{props.theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
            <Main /> 
            <Footer /> 
        </div>
    )
}     

export default withTheme(App) 
/* <Switch>
    <Route path="/header" component={Header} />
    <Route exact path="/" component={Main} />
    <Route path="/footer" component={Footer} />
</Switch> */