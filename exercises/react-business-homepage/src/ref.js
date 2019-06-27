import React from "react";
import ReactDOM from "react-dom";

import React from "react";
class App extends React.Component {}
    or
import React, {Component} from "react"
class App extends Component {}


import PropTypes from "prop-types"
Product.propTypes = {
    title: PropTypes.string
    inventory: PropTypes.number

}

import './index.css';
import App from './App';

MVC: 
Model - Data 
Controller - interaction between the model and the view
View - Presentation/interface

npm i -g create-react-app
create-react-app .
(or to also create a new folder: create-react-app newFolderName react
npm start

For css in React use "className=" not "class"
Local image files: <img src={require("./cats.jpg")} alt=""/>

For scrimba exercise: ReactDOM.render(<div><ul><li>Tea</li><li>Yogurt</li><li>Banana</li></ul></div>, document.getElementById("root"))

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

