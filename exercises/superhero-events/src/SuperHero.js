import React from 'react'

const SuperHero = (props) => {

    const styles = {
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px"
      }

    const { name, catchPhrase, imageName } = props.hero
    
    return (
      <div style={styles} onClick={()=>alert(`\n${name} says... \n\n"${catchPhrase}"`)}>
          <h2>{name}</h2>
          <img width="90%" src={imageName} alt=""/>
      </div>
    )
}

export default SuperHero