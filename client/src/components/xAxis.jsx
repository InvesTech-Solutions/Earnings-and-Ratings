import React, { Component } from 'react';

class XAxis extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {

  }

  render () {
    return (
      <div className="xlabel">
        <span className="x-1">
          <div className="x1">
            Q4 2016
          </div>
        </span>
      </div>
    )
  }
}

export default XAxis;