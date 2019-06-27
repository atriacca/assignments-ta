import React from 'react'
import Friend from './Friend';

// function FriendList() {
const FriendList = props => {

    const friends = [
        {
            name: "Ben",
            age: 29,
            pets: [
                {
                    name: "Spot",
                    breed: "tabby"
                },{
                    name: "John Johnson",
                    breed: "husky"
                },{
                    name: "Bear the bear",
                    breed: "grizzly"
                }
            ]
        },{
            name: "Bob",
            age: 31,
            pets: [
                {
                    name: "Sally",
                    breed: "Australian Shepard"
                },{
                    name: "Linus",
                    breed: "Collie"
                }
            ]
        },{
            name: "Marcus",
            age: 25,
            pets: [
                {
                    name: "Indy",
                    breed: "Akita"
                },{
                    name: "Anna",
                    breed: "Persian cat"
                }
            ]
        },{
            name: "Jacob",
            age: 20,
            pets: [
                {
                    name: "Fluffy",
                    breed: "Sphynx cat"
                },{
                    name: "Patches",
                    breed: "Sphynx cat"
                },{
                    name: "Tiger",
                    breed: "Sphynx cat"
                },{
                    name: "Oscar",
                    breed: "Sphynx cat"
                }
            ]
        }
    ]

    const mappedFriends = friends.map((friend, i) => 
                    <Friend 
                        key={i + friend.name} 
                        name={friend.name}
                        age={friend.age}
                        pets={friend.pets}
                        />)

    return (
        <div className="friendsList">
            <h1>Friends with pets</h1>
            {mappedFriends}
        </div>
    )
}

export default FriendList