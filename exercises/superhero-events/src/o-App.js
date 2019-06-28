import React from 'react';

import data from './data.json';
import SuperHero from './o-SuperHero';

const App = (props) => {

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

export default App;