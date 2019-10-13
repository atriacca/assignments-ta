import React, { Component } from 'react'
import './style.css'

class Quote extends Component {
    constructor(props){
        super(props)
        this.state = {
            content: "",
            title: "",
            ID: "",
            savedQuotes: []
        }
    }

    saveQuote = (props) => {
    const { quotation } = this.props
    // const { content, title, ID } = this.props.quotation
    const { ID } = this.props.quotation
    if(!this.state.savedQuotes.includes(`${ID}`)){
            this.setState({
                savedQuotes: this.state.ID,
            })
            localStorage.setItem(`${ID}`, JSON.stringify(quotation))
        console.log(this.state.savedQuotes)
        alert("Your quote has been saved to favorites") 
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
                    <span dangerouslySetInnerHTML={{ __html : this.props.quotation.content}} /></h2>
                    <div className='rightQ'>&rdquo;</div>
                    {/* <h3 className='title'>by {this.props.quotation.title}</h3> */}
                    <h3 className='title'>by <span dangerouslySetInnerHTML={{ __html : this.props.quotation.title}} /></h3>
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