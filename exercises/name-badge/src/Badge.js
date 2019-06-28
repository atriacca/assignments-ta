import React from 'react';

function Badge(props) {
    const styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px",
        border: "black solid 2px"

    }
    return (
        <div style={styles}>
            <div>{ props.firstName }</div>
            <div>{ props.lastName }</div>
            <div>{ props.email }</div>
            <div>{ props.birthPlace }</div>
            <div>{ props.phone }</div>
            <div>{ props.favortiteFood }</div>
            <div>{ props.about }</div>
        </div>
    );
}

export default Badge