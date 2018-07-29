import React, { Component } from 'react';
import Tag from './tag';
import PercentBars from './percentBars';
import SummaryBoxes from './summaryBoxes';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPerc : null,
      totalRaters : null,
      trigger : false
    }
  }

  componentDidUpdate () {
    let buyCount = 0;
    this.props.ratings.forEach((element) => {
      if (element === 'Buy') {
        buyCount++
      };
    });
    let raterCount = this.props.ratings.length;
    if (!this.state.trigger) {
      this.setState({ 
        buyPerc : Math.round((buyCount / raterCount) * 100),
        totalRaters : raterCount,
        trigger : true
      });
    }
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <section id="summaryComponent">
        <header className="tagHead">
          Analyst Ratings
        </header>
        <Tag
          percent={this.state.buyPerc}
          total={this.state.totalRaters}
        />
        <PercentBars
        />
        <SummaryBoxes
        />
      </section>
    )
  }
}

export default Summary;