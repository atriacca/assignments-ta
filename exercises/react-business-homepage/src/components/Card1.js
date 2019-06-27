import React from "react";

const Card = (props) => {
    const styles = {
        div: {
            border: "solid purple 5px",
            padding: "10px",
            margin: "10px",
            backgroundColor: props.bgColor
        }
    }
    return (
      <div style={styles.div}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      <img className="small1" src={props.imgUrl} alt="photo not rendered"/>
      <p>{props.info}</p>
      <p></p>
      </div>
    )
}
      
export default Card;