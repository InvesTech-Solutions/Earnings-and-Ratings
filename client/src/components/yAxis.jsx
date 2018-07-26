import React, { Component } from 'react';

class YAxis extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {

  }

  render () {
    return (
      <div className="ylabel">
        <span className="y-1">
          <div className="y1">$1.00</div>
        </span>
        <span className="y-2">
          <div className="y2">$2.00</div>
        </span>
        <span className="y-3">
          <div className="y3">$3.00</div>
        </span>
        <span className="y-4">
          <div className="y4">$4.00</div>
        </span>
      </div>
    )
  }
}

export default YAxis;