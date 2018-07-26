import React, { Component } from 'react';
import XAxisTick from './xAxisTick.jsx';

class XAxis extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {
    console.log(this.props.dates);
  }

  render () {
    return (
      <div className="xlabel">
        {this.props.dates.map((date, index) => {
          return (
            <XAxisTick 
              xValue={date}
              ind={index + 1}
            />
          );
        })}
      </div>
    )
  }
}

export default XAxis;