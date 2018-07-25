import React, { Component } from 'react';


class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {
    console.log('dfdfdf')
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
                <svg className="xs" width="560" height="120">
                  <g>
                    <g transform="translate(0, 58.536585)">
                      <circle r="7" className="circle" />
                    </g>
                  </g>
                </svg>
                <div className="xlabel">
                  <span className="x-1">
                    <div className="x1">
                      Q4 2016
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classame="descDiv">
        </div>
      </section>
    ) 
  }

  
}

export default Earnings;