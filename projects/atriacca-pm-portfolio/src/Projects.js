import React from 'react'

function Projects() {
    return (
        <div>
            <h4>Projects</h4>
            <div>
                <div className="project">
                    <h6>AllredFireTribe.com redesign:<br></br><br></br>
                    I recreated Clayton Allred's website. I added token authentication and other functionality, enhanced responsiveness, expanded product offerings, etc. Please click <a href="https://allredfiretribe.herokuapp.com" target="_blank" rel="noopener noreferrer">here</a> to load it and explore.<br></br><br></br>
                    Built with JavaScript, React, Node.js, MongoDB, Axios, Express, Mongoose, HTML, and CSS</h6><a href="https://allredfiretribe.herokuapp.com" target="_blank" rel="noopener noreferrer"><img src={require('./resources/AllredFireTribe-tn.png')} alt="Unable to render"/></a>
                </div>
                <div className="project">
                    <h6>Quotes on Design API exercise:<br></br><br></br>
                    I created this app for the Personal React Site API project at V School's Full Stack JavaScript Development Bootcamp. I chose the <a href="https://quotesondesign.com/api/" target="_blank" rel="noopener noreferrer">Quotes on Design</a> API for this project. The quotes revolve around web development, coding, design, etc. The app allows the user to display random quotations then save any for future viewing. Please click <a href="http://at-devquotes.surge.sh/" target="_blank" rel="noopener noreferrer">here</a> to load my DevQuotes project. <br></br><br></br>NOTE: My apologies. A recent change to the API broke my app. I'm currently working on a fix.<br></br><br></br>
                    Built with JavaScript, React, Node.js, Axios, HTML, and CSS</h6><a href="http://at-devquotes.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={require('./resources/DevQuotes-no-border-2.png')} alt="Unable to render"/></a>
                </div>
                <div className="project">
                    <h6>Zen Garden CSS exercise:<br></br><br></br>
                    This was an individual assignment designed to replicate the Zen Garden web site without copying the source code. I wrote the HTML and CSS files and used site content for logos, images and fonts. This was a purely visual exercise so most links will not work. It is responsive to window width. Please click <a href="http://atriacca-zengarden.surge.sh/" target="_blank" rel="noopener noreferrer">here</a> to load my project and <a href="http://www.csszengarden.com/" target="_blank" rel="noopener noreferrer">here</a> to compare it to the original site.<br></br><br></br>
                    Built with HTML and CSS
                    </h6>
                    <a href="http://atriacca-zengarden.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={require('./resources/zen-garden-img.png')} alt="Unable to render"/></a>
                </div>
                {/* <div className="project">
                    <h6>Business Time exercise:<br></br><br></br>
                    This was an individual assignment to create a static web site for a fictitious business. Please click <a href="http://at-business-time.surge.sh/" target="_blank" rel="noopener noreferrer">here</a> to load my project.<br></br><br></br>
                    Built with HTML and CSS</h6>
                    <a href="http://at-business-time.surge.sh/" target="_blank" rel="noopener noreferrer"><img src={require('./resources/business-time-img.png')} alt="Unable to render"/></a>
                </div> */}
                <p>* This web page will be perpetually under construction as I continue to add more info, projects, links, etc. Please come back to check it out periodically. Namaste...</p>
            </div>
        </div>
    )
}

export default Projects
// atriacca-zengarden.surge.sh {require('./resourcees/zen-garden-img.png')}
// <a href="link" target="_blank"><img src="image" alt="Unable to render photo"></a>
/*
DevQuotes-no-border.png

*/