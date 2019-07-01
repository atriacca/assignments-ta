import React from 'react'

const Badge = (props) => {
// function Badge(props) {
    const { firstName, lastName, email, birthPlace, phone, favoriteFood, about } = props

    // console.log(props)

    const styles = {
        display: "grid",
        // gridTemplateColumns: "1fr 1fr",
        // gridGap: "10px",
        // width: "60vw",
        // border: "black solid 2px",
        // padding: 10,
        // margin: "10px auto",
        // minWidth: 450,
    }
    return (
        <div style={styles} className="badge">
            <div className="header">Badge:</div>
            <div className="name">Name: { firstName } { lastName }</div>
            <div className="phone">Phone: { phone }</div>
            <div className="pob">Place of birth: { birthPlace }</div>
            <div className="favFood">Favorite food: { favoriteFood }</div>
            {/* <br></br> */}
            <div className="email">Email: { email }</div>
            <div className="about">{ about }</div>

            {/* IF NOT DESCTRUCTURED: */}
            {/* <div>{ props.firstName }</div>
            <div>{ props.lastName }</div>
            <div>{ props.email }</div>
            <div>{ props.birthPlace }</div>
            <div>{ props.phone }</div>
            <div>{ props.favoriteFood }</div>
            <div>{ props.about }</div> */}
        </div>
    )
}

export default Badge