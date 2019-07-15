import React, { Component } from 'react'
import './style.css'
// import HouseForm from './components/HouseForm.js'
// import HouseList from './components/HouseList.js'
import { withHouses } from './context/HouseProvider.js'

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         title: "",
    //         description: "",
    //         imgUrl: ""
    //     }
    // }
    
    // componentDidMount(){
    //     this.props.getHouses()
    // }

    // handleChange = e => {
    //     const { name, value } = e.target
    //     this.setState({ [name]: value })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()

    //     const newHouse = {
    //         title: this.state.title,
    //         description: this.state.description,
    //         imgUrl: this.state.imgUrl
    //     }
        
    //     this.setState({
    //         title: "",
    //         description: "",
    //         imgUrl: ""
    //     })

    //     this.props.addHouse(newHouse)
    // }

    render(){

        return (
            <div>hey
                {/* <HouseForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    btnText="Add Weird House"
                    {...this.state}
                />
                <div>
                    <HouseList 
                        houses={this.props.houses}
                        deleteHouse={this.props.deleteHouse}
                        updateHouse={this.props.updateHouse}
                    />
                </div> */}
            </div>
        )
    }
}

export default withHouses(App)
// export default App