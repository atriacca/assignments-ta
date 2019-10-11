import React, { Component } from 'react'
import Favorite from "./xStuff/Favorite.js"

class Favorites extends Component {
    constructor(){
        super()
        this.state={
            quotes: [],
            ID: [],
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
        this.setState(prevState => ({
            quotes: prevState.quotes.filter(quote => {
                if(e.target.id === quote.ID) {
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
                    <h1>There aren't any saved Favorites at this time</h1>
                </div>
            )
        } else {
            const mappedFavs = this.state.quotes.map((quote, i) => {
                return (
                    <div className='quote' style={styles} key={quote.ID}>
                        <Favorite
                            remove={this.removeQuote}
                            quote={quote.content}
                            title={quote.title}
                            ID={quote.ID}/>
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