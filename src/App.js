import React from 'react';
import $ from 'jquery';
import Taco from './Blog';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    };
  };

  componentWillMount() {
    $.get(`http://localhost:3005/blogs`, (result) => {
      this.setState({
        blogs: result,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.blogs.map((blog) =>
          <Taco taco={blog} />
        )}
      </div>
    );
  }
}

export default App;
