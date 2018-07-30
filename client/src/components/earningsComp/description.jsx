import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="descDiv">
        <div className="descEst">
          <svg width="28" height="28">
            <g transform="translate(14, 20)">
              <circle r="7" fill="#d7f7e7" className="descCircle" />
            </g>
          </svg>
          <div className="descText">
          Estimated
          </div>
          <div className="botText">
            {this.props.estimate[this.props.estimate.length - 1]}
          </div>
        </div>
        <div className="descAct">
          <svg width="28" height="28">
            <g transform="translate(14, 20)">
              <circle r="7" fill="#2BD89E" className="descCircle" />
            </g>
          </svg>
          <div className="descText">
          Actual
          </div>
          <div className="botText">
            {this.props.actual[this.props.estimate.length - 1]}
          </div>

        </div>
      </div>
    )
  }
}

export default Description;