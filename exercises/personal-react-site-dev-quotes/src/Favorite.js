import React from "react"

const Favorite = props => {

    const styles = {
        fontSize: "48px",
        color: 'lavender',
        textAlign: 'center',
        fontFamily: "Bradley Hand",
    }

    return (
        <div key={props.ID}>
            <span className='fav'>
                <h2 style={styles}><span dangerouslySetInnerHTML={{ __html : props.quote}}></span></h2>
                <h3 className='fav'>by <span dangerouslySetInnerHTML={{ __html : props.title}}></span></h3>
                {/* <h3 className='fav'>by {props.title}</h3> */}
            </span>
                <button className='save' onClick={props.remove} id={props.ID}>Remove from Favorites</button>
        </div>
    )
}

export default Favorite