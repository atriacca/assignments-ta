import React, { Component } from 'react'
import Favorite from "./Favorite.js"

class Favorites extends Component {
    constructor(){
        super()
        this.state={
            quotes: [],
            id: [],
        }
    }

    componentDidMount(){
        const quotes = Object.values(localStorage).map(quote=>{
            return JSON.parse(quote)
        })
        this.setState({
            quotes
        })
    }

    removeQuote = (e) => {
        e.persist()
        localStorage.removeItem(e.target.id)
        alert("The quote has been removed from your favorites.")
        this.setState(prevState => ({
            quotes: prevState.quotes.filter(quote => {
                if(e.target.id === quote.id) {
                    return false
                } else {
                    return true
                }
            })
        }))
        document.location.reload()
    }
        
    render = () =>{

        const styles = {
            fontSize: "48px",
            color: 'lavender',
            textAlign: 'center',
            fontFamily: "Bradley Hand",
        }

        if(this.state.quotes.length === 0){
            return (
                <div className='quote' style={styles}>
                    {/* <h1>NOTE: My apologies. A recent change to the API broke my app.</h1>
                    <h1>I was able to resolve it enough to display them, but I'm still working on a fix to save favorites. I appreciate your patience.</h1>
                    <h1><a className='bodyTag' href='https://quotesondesign.com/api/' target='_blank' rel="noopener noreferrer">View the Quotes on Design API</a></h1> */}
                    <h1>There aren't any saved Favorites at this time</h1>
                </div>
            )
        } else {
            const mappedFavs = this.state.quotes.map((quote, i) => {

                return (
                    <div className='quote' style={styles} key={quote.id}>
                        <Favorite
                            remove={this.removeQuote}
                            quote={quote.content.rendered}
                            title={quote.title.rendered}
                            id={quote.id}/>
                    </div>
                ) 
            })

            return (
                <div className='quote' style={styles}>
                    <h1>Saved Quotes</h1>
                    {mappedFavs}
                </div>
            )
        }
    }
}

export default Favorites