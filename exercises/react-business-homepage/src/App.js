import React from "react";
import './style.css';
import {Switch, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MainA from "./components/MainA";
// import MainB from "./MainB";
// import MainC from "./MainC";
// import Card from "./Card";
import Services from "./components/Services";
import Pics from "./components/Pics";
import Footer from "./components/Footer";

const App = () => {

    return (
        <div>
            <Navbar/>
            {/* <Main/> */}
            <div className="cardHover">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/mainA" component={MainA} />
                    <Route path="/services" component={Services} />
                    {/* <Route path="/contact" component={ContactUs} /> */}
                    <Route path="/pics" component={Pics} />
                </Switch>
            </div>
            <Services/>
            <Pics/>
            <Footer/>
        </div>
    );
}

export default App;