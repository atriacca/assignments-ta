import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
// https://daveceddia.com/ajax-requests-in-react/

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        name: "",
        image: ""
      }
  }
// https://s3.amazonaws.com/v-school/data/hitlist.json
  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('root')
);

export default App;