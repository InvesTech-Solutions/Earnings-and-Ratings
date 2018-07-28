import React, { Component } from 'react';
import Tag from './tag';
import PercentBars from './percentBars';
import SummaryBoxes from './summaryBoxes';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidUpdate () {

  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <section id="summaryComponent">
        <header className="head">
          Analyst Ratings
        </header>
        <Tag 
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