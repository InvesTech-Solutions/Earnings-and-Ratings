import React, { Component } from 'react';
import SummaryBox from './summaryBox';

class SummaryBoxes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate () {
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div className='summaryBoxes'>
        {this.props.summaries.map((summary, index) => {
          return(  
            <SummaryBox
              summary={summary}
              ind={index}
            />
          )
        })}
      </div>
    )
  }
}

export default SummaryBoxes;