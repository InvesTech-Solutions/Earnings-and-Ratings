import React, { Component } from 'react';
import XAxis from './xAxis.jsx';
import YAxis from './yAxis.jsx';
import DataPoints from './dataPoints.jsx'
import Description from './description.jsx'

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {
    console.log(this.props)
  }

  render () {
    return (
      <section id="earningsComponent">
        <header className="earningsHead">
        Earnings
        </header>
        <div className="chartDiv">
          <div className="chartContainer">
            <div className="innerChartContainer">
              <div className="axes">
                <YAxis />
                <DataPoints />
                <XAxis />
              </div>
            </div>
          </div>
        </div>
        <Description 
          estimate={this.props.estimatedEarnings}
          actual={this.props.actualEarnings}
        /> 
      </section>
    ) 
  }

  
}

export default Earnings;