import React, { Component } from 'react';

const SuperHero = (props) => {

    return (
      <div>
          <h2 onClick={()=>alert(props.hero.catchPhrase)}>{props.hero.name}</h2>
          <img width="200px" src={props.hero.imageName} onClick={()=>alert(props.hero.catchPhrase)} />
      </div>
    );
}

export default SuperHero;