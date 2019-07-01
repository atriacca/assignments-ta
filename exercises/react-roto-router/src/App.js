import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App