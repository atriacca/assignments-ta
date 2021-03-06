import React, { Component } from 'react'
import Profile from './Profile.js'
import Interests from './Interests.js'
import Intro from './Intro.js'
import Resume from './Resume.js'
import Navbar from './Navbar.js'
import Projects from './Projects.js'
import ProjectsPhone from './ProjectsPhone.js'
import Contact from './Contact.js'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    navToggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    // responsive = () => {
    //     const breakpoints = {
    //         // desktop: 1040,
    //         // tablet: 840,
    //         mobile: 527
    //       };

    //       if (window.innerWidth > breakpoints.mobile) {
    //         // do stuff for tablet
    //       } else if (window.innerWidth <= breakpoints.mobile) {
    //         // do stuff for mobile
    //       }
    // }

    render() {

        const breakpoints = {
            // desktop: 1040,
            // tablet: 840,
            mobile: 527
          };

          if (window.innerWidth > breakpoints.mobile) {
              
        return (
            <div id="home-header" className="page app-container">
                <div 
                    onClick={this.navToggler}
                    className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}></div>
                    <div className="page app-container" onClick={this.navToggler}>
                    <div className="ham-top"></div>
                    <div className="ham-mid"></div>
                    <div className="ham-bot"></div>
                    </div>
                    <button onClick={this.navToggler}>|||</button>
                <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
                <Intro />
                <div className='separator'></div>
                <Profile />
                <div id="resume-header" className='separator'></div>
                <Resume />
                <div id="projects-header" className='separator'></div>
                <Projects />
                <div className='separator'></div>
                <Interests />
                <div id="contact-header" className='separator'></div>
                <Contact />
                <div className='separator'></div>
            </div>
        )
       
        } else if (window.innerWidth <= breakpoints.mobile) {
            return (
                <div className="page app-container">
                    <div 
                        onClick={this.navToggler}
                        className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}></div>
                        <div className="page app-container" onClick={this.navToggler}>
                        <div className="ham-top"></div>
                        <div className="ham-mid"></div>
                        <div className="ham-bot"></div>
                        </div>
                        <button onClick={this.navToggler}>|||</button>
                    <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
                    <Intro />
                    <div className='separator'></div>
                    <Profile />
                    <div id="projects-header" className='separator'></div>
    
                    <ProjectsPhone />
    
                    <div className='separator'></div>
                    <Resume />
                    <div className='separator'></div>
                    <Interests />
                    <div id="contact-header" className='separator'></div>
                    <Contact />
                    <div className='separator'></div>
                </div>
            )
        }
    }
}

export default App