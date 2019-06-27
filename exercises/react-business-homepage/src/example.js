import React from "react"
import ReactDOM from "react-dom"

const Footer = () => {
    return (
      <div>
        <h1>Alan Triacca</h1>
        <p>I'm new to React</p>
        <ul>
        <li>Hawaii</li>
        <li>Portugal</li>
        <li>NZ</li>
        </ul>
      </div>
    )
}

export default Footer;


const App = () => {

  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridRowHeight: "200px"
  }
  return (
    <div style={styles}>
        <Navbar/>
        <Main/>
        <Card/ title="Kustom Car" description="Resto-mod GTO">
        <Card/ title="Kustom Car" description="Mercedes">
        <Card/ title="Kustom Motor" description="Big block Chevy">
        <Card/ title="Kustom Motor" description="Supercharger">
        <Card/ title="Kustom Motor" description="Hemi with blower">
        <Card/ title="Kustom Interior" description="Leather">
        <Card/ title="Kustom Interior" description="Old school">
        <Card/ title="Kustom Car" description="Resto-mod GTO">
        <Card/ title="Kustom Car" description="Resto-mod GTO">
        <Services/>
        <Main2/>
        <Pics/>
        <Footer/>
    </div>
  );
}

import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke