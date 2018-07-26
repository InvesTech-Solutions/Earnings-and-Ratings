import React, { Component } from 'react';

class DataPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {

  }

  render () {
    return (
      <svg className="xs" width="560" height="120">
        <g>
          <g transform="translate(0, 58.536585)">
            <circle r="7" className="dataPoint" />
          </g>
        </g>
      </svg>
    )
  }
}

export default DataPoints;