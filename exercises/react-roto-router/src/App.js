import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './style.css'

import Home from './Home.js'
import About from './About.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Stuff from './Stuff.js'
import More from './More.js'
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
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/more" component={More} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App