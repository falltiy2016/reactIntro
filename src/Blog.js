import React, { Component } from 'react';
import './Blog.css';
import $ from 'jquery';

class Blog extends Component {

  changeColor(e) {
  	$(e.target).toggleClass('green');
  }

  render() {
    return (
      <div onClick={this.changeColor} className="Blog">
        <h2>{this.props.taco.title}</h2>
        <p>{this.props.taco.post}</p>
      </div>
    );
  }
}

export default Blog;
