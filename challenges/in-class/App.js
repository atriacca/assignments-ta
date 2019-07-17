import React from 'react';
const App = ( props ) => {
    return (
            <dir>
                <h1>Name: { props.name } </h1>
                <p>Age: { props.age } </p>
            </dir>
    )
}
export default App;