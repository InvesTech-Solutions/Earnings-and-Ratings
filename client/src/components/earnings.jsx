import React, { Component } from 'react';


class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        hi
        <canvas id="scatterChart" height="400" width="800"></canvas>
      </div>    
    ) 
  }

  componentDidUpdate () {
    console.log('dfdfdf')
  }
}

export default Earnings;