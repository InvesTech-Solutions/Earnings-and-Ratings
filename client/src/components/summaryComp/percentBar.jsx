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
      <div className='barRow'>
        <div className='barSuggestion'>
          {this.props.suggestion}
        </div>
        <div className='barContain'>
          <div className='percInBarContain' style={{left: this.state.percent}}>
            <span className='percInBar'>{this.state.rounded}</span>
          </div>
          <div className='wholeBar'>
            <div className='coloredBar' style={{width: this.state.percent}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default PercentBar;