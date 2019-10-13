import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import Favorites from './Favorites.js'
import Acknowledgements from './Acknowledgements.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

class App extends Component {

    render() {
        const styles = {
            flex: "1 1 0",
            height: 'auto',
        }

        return (
        <div style={styles} className='post'>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/about" component={About} />
                <Route path="/acknowledgements" component={Acknowledgements} />
                <Route path="/contact" component={Contact} />
            </Switch> 
            <Footer />
        </div>
        )
    }
}

export default App