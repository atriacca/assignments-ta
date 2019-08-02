/* 
https://docs.google.com/forms/d/e/1FAIpQLScrLxVZOElNXXNepq6wE1uu7Zc_a2nSuZUHpIGzJFUVCLxu3g/viewform


What would the handleChange function look like if you were only wanting to update the state of the 'name' input? *
*/
handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
}

/* 
What would the handleChange function look like if you wanted it to handle changes to both inputs? *
*/
handleChange = e => {
    const { name, age, value } = e.target
    this.setState({ [name]: value })
    this.setState({ [age]: value })
}

/*Using a ternary, dynamically render the above code so that if 'props.greeting === friend' it will return the first block and else it will return the second. (you only need one return( ) ) */
return (
    props.greeting === friend 
    ?
    <div>
        <h1>Hello friend</h1>
    </div>
    :
    <div>
        <h1>Hello enemy</h1>
    </div>
)

/* 
Which of the following best describes the life cycle method componentWillMount( )?
1 point
It runs as soon as the render method runs
It runs before the render method runs but after the component mounts
It runs before the render method runs and before the component mounts
It runs after the render method runs but before the component mounts

ANSWER: It runs before the render method runs and before the component mounts

*/


/* 
Q: Why do we use life cycle methods with ajax(axios) calls?
A: To get data data at a specific time
*/


/* 
Q; Write a switch statement with 3 cases and a default
A: 
*/


/* 
Q: 
*/