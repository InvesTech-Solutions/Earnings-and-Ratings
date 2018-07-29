import React, { Component } from 'react';

class DataPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    console.log(this.props.yRange[0]);
  }

  render () {
    return (
      <g>
        <g transform={"translate(" + (560 * (this.props.ind - 1) / 6) + ", " + (120 - 120 * (this.props.estimatePoint - Number(this.props.yRange[0].substring(1)))/(Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")"}>
          <circle r="7" fill="#d7f7e7" className={"dataPoint" + this.props.ind + ', estCircle'} />
        </g>
        <g transform={"translate(" + (560 * (this.props.ind - 1) / 6) + ", " + (120 - 120 * (this.props.actualPoint - Number(this.props.yRange[0].substring(1)))/(Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")"}>
          <circle r="7" fill="#4fc189" className={"dataPoint" + this.props.ind + ', actCircle'} />
        </g>
      </g>
    )
  }
}

export default DataPoint;