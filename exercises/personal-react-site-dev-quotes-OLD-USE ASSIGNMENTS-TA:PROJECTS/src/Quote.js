import React, { Component } from 'react'
import './style.css'

class Quote extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: "",
            title: "",
            id: "",
            savedQuotes: []
        }
    }

    saveQuote = props => {
    const { quotation } = this.props
    // const { content, title, id } = this.props.quotation
    const { id } = this.props.quotation
    if(!this.state.savedQuotes.includes(`${id}`)){
            this.setState({
                savedQuotes: this.state.id,
            })
            localStorage.setItem(`${id}`, JSON.stringify(quotation))
        alert("The quote has been saved to your favorites!") 
        }
    }
    
    render() {

        const styles = {
            fontSize: "50px",
            color: 'lavender',
            display: 'flex',
            margin: '0px 100px 0px 20px',
        }

        return (
            <div>
                <div>
                    <div className='leftQ'>&ldquo;</div>
                    <h1>devQuotes</h1>
                    <h3 className='quote q'>Quotes for developers and designers</h3>
                    <h2 style={styles} className='quote'>
                    <span dangerouslySetInnerHTML={{ __html : this.props.quotation.content.rendered}} /></h2>
                    <div className='rightQ'>&rdquo;</div>
                    <h3 className='title'>by <span dangerouslySetInnerHTML={{ __html : this.props.quotation.title.rendered}} /></h3>
                </div>
                <button className='save' onClick={this.saveQuote}>Save to Favorites</button>
                {/* <button className='save' onClick={() => localStorage.setItem(`savedQuote${id}`, props.quotation.content)}>Save to Favorites</button> */}
                {/* <button className='save'  onClick={this.saveQuote}>Save to Favorites</button> */}
                {/* <button className='save' onClick={() => this.saveQuote()}>Save to Favorites</button> */}
            </div>
        )
    }
}

export default Quote