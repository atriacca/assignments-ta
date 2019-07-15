import React, { Component } from 'react'
import axios from 'axios'

const HouseContext = React.createContext()

class HouseProvider extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    
    getHouses = () => {
        axios.get("https://api.vschool.io/alant/todo")
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => console.log(err))
    }

    addHouse = (newHouse) => {
        axios.post("https://api.vschool.io/alant/todo", newHouse)
            .then(res => {
                const savedHouseFromDB = res.data
                this.setState(prevState => ({
                    houses: [...prevState.houses, savedHouseFromDB]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteHouse = (houseID) => {
        axios.delete(`https://api.vschool.io/alant/todo/${houseID}`)
            .then(res => {
                alert(res.data.msg)
                this.setState(prevState => ({
                    houses: prevState.houses.filter(house => house._id !== houseID)
                }))
            })  
            .catch(err => console.log(err))
    }

    updateHouse = (houseID, updateHouse) => {
        axios.put(`https://api.vschool.io/alant/todo/${houseID}`, updateHouse)
            .then(res => {
                this.setState(prevState => ({
                    houses: prevState.houses.map(house => house._id === houseID ? res.data : house)
                }))
            })  
            .catch(err => console.log(err))
    }

    render() {
        return (
            <HouseContext.Provider 
                value={{
                    houses: this.state.houses,
                    getHouses: this.getHouses,
                    addHouse: this.addHouse,
                    deleteHouse: this.deleteHouse,
                    updateHouse: this.updateHouse
                }}>
                { this.props.children }
            </HouseContext.Provider>
        )
    }
}

export default HouseProvider

export const withHouses = C => props => (
    <HouseContext.Consumer>
        { (value) => <C {...value} {...props}/>}
    </HouseContext.Consumer>
)