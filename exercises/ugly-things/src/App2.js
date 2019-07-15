import React, { Component } from 'react';

class App2 extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      image: "",
      titles: [],
      descriptions: [],
      images: [],
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState((prevState)=>{
      return {
      title: "",
      description: "",
      image: "",
      titles: [prevState.title, ...prevState.titles],
      descriptions: [prevState.description, ...prevState.descriptions],
      images: [prevState.image, ...prevState.images],
      }
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const styles = {
      padding: "20px",
      width: "200px"
    }
    
    const mappedTitles = this.state.titles.map((titleList)=>{
        return <h3>{titleList}</h3>
    })
    const mappedDescriptions = this.state.descriptions.map((descriptionList)=>{
        return <h3>{descriptionList}</h3>
    })
    const mappedImages = this.state.images.map((imageList)=>{
        return <h3>{imageList}</h3>
    })

    return (
        <div style={styles}>
            <h3>Ugly Things</h3>
            <form onSubmit={this.onSubmit}>
              <input name="title" value={this.state.title} type="text" placeholder="Name the thing" onChange={this.handleChange} />
              <input name="description" value={this.state.description} type="text" placeholder="Describe the thing" onChange={this.handleChange} />
              <input name="image" value={this.state.image} type="url" placeholder="URL for the thing" onChange={this.handleChange} />
              <button>Click to submit</button>
            </form>
            <div>
              Submissions: {mappedTitles}{mappedDescriptions}{mappedImages}
              <img src={this.state.image} alt="" />
            </div>
        </div>
    );
  }
}

export default App2;