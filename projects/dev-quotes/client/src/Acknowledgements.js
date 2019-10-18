import React, { Component } from 'react'

class Acknowledgements extends Component {
    render() {
        const styles = {
            fontSize: "24px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Verdana",
        }
        return (
            <div className='quote' style={styles}>
                <h2>Acknowledgements</h2>
                <p>This app was created using the Quotes on Design API, <a className='bodyTag' href='https://quotesondesign.com/api/' target='_blank' rel="noopener noreferrer">quotesondesign.com/api</a>, for the Personal React Site API project at <a className='bodyTag' href='https://vschool.io/' target='_blank' rel="noopener noreferrer">V School</a>.</p>
            </div>
        )
    }
}

export default Acknowledgements