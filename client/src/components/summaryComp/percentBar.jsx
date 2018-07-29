import React, { Component } from 'react';

class PercentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent : '',
      rounded : '',
      trigger : false
    }
  }

  componentDidUpdate () {
    let percent = `${(this.props.count / this.props.total) * 100}%`;
    let rounded = `${Math.round(100 * this.props.count / this.props.total)}%`;
    if (this.state.trigger === false && this.props.total > 0) {
      this.setState({ percent: percent, rounded: rounded, trigger: true })
    };
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div>
        <div>
          {this.props.suggestion}
        </div>
        <div>
          <div>
            <span>{this.state.rounded}</span>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PercentBar;