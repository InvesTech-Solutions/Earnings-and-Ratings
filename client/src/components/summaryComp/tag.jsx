import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {

  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div id="tagContainer">
        <div id="tagCircle">
        </div>
      </div>
    )
  }
}

export default Tag;