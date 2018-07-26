import React from 'react';
import ReactDOM from 'react-dom';
import Earnings from './earnings.jsx';

import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      exampleDataLoaded: false,
      companyId: null,
      companyName: '',
      companyEstimatedEarnings: [],
      companyActualEarnings: [],
      buySummary: '',
      sellSummary: '',
      ratings: []
    }

  }

  render () {
    return (<div>
     <Earnings 
      estimatedEarnings={this.state.companyEstimatedEarnings}
      actualEarnings={this.state.companyActualEarnings}
    />
    </div>)
  }

  componentDidMount() {
    // for now, send a request to get fake data from server
    let that = this;
    $.ajax({
      url: '/createExample',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        // once example data created, do another AJAX to get the data
        $.ajax({
          url: '/getExample',
          type: 'GET',
          contentType: 'application/json',
          success: (data) => {
            console.log(data)
            that.setState({ 
              exampleDataLoaded : true, 
              companyId: JSON.parse(data.id),
              companyName: data.name,
              companyEstimatedEarnings: JSON.parse(data.esimated),
              companyActualEarnings: JSON.parse(data.actual),
              buySummary: data.bestsummary,
              sellSummary: data.sellsummary,
              ratings: data.raters
            });
          },
          error: (error) => {
            console.log(error);
          }
        })

      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

ReactDOM.render(<App />, document.getElementById('app'))