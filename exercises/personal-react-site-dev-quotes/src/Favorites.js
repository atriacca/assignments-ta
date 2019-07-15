import React, { Component } from 'react'

class Favorites extends Component {
    render() {

        // console.log(JSON.parse(localStorage.savedID))
        // console.log(JSON.parse(localStorage.savedID).title)
        
        const styles = {
            fontSize: "48px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Bradley Hand",
        }

        return (
            <div className='quote' style={styles}>
                {/* { localStorage[savedID] */}
                { localStorage.savedID
                ?
                <>
                <h1>Saved Quotes</h1>
                    {/* <span dangerouslySetInnerHTML={{ __html : JSON.parse(localStorage[savedID].content)}}></span>
                    <span>by {JSON.parse(localStorage[savedID]).title}</span> */}
                    <button className='save' onClick={localStorage.removeItem("savedID")}>Remove quote from Favorites</button>
                </>
                :
                <>
                    <h1>There aren't any quotes saved to Favorites</h1>
                </>
                }
            </div>
        )
    }
}

export default Favorites