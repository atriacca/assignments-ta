import React from 'react'
import data from './data.json'
import SuperHero from './SuperHero'

const App = () => {

    const heroComponents = data.map(item => <SuperHero key={item.name} hero={item}/>)
    
    const styles = {
      fontFamily: "sans-serif",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridRowHeight: "200px",
      textAlign: "center",
    }
    return (
        <div>
            <div style={styles}>
            {heroComponents}
            </div>
        </div>
    )
}

export default App