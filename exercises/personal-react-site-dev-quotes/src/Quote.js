import React from 'react'
import './style.css';

function Quote (props) {

    // console.log(JSON.stringify(localStorage.savedQuote))
    // console.log(props.quotation.ID)
    // const ID = props.quotation.ID
    
    const saveQuote = () => {
        const savedID = props.quotation.ID
        const savedIDs = []
        console.log(savedID)
        savedIDs.push(savedID)
        console.log(savedIDs)

        // localStorage.setItem("savedID", JSON.stringify(props.quotation))

        localStorage[savedID] = JSON.stringify(props.quotation)
    }

    const styles = {
        fontSize: "50px",
        color: 'lavender',
        display: 'flex',
        // margin: '0px 20px 0px 20px',
    }

    return (
        <div>
            <div>
                <div className='leftQ'>&ldquo;</div>
                <h1>DevQuotes</h1>
                <h3 className='quote'>Quotes for developers and designers</h3>
                <h2 style={styles} className='quote'>
                <span dangerouslySetInnerHTML={{ __html : props.quotation.content}} /></h2>
                <div className='rightQ'>&rdquo;</div>
                <h3 className='quote'>by <span dangerouslySetInnerHTML={{ __html : props.quotation.title}} /></h3>
            </div>

            <button className='save' onClick={() => saveQuote()}>Save to Favorites</button>
            {/* <button className='save' onClick={() => localStorage.savedID = JSON.stringify(props.quotation)}>Save to Favorites</button> */}
            {/* <button className='save' onClick={() => localStorage.setItem("savedID", props.quotation.content)}>Save to Favorites</button> */}
        </div>
    )
}

export default Quote