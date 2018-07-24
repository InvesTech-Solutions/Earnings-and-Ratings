import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      exampleDataLoaded: false,
      exampleData: {}
    }

  }

  render () {
    return (<div>
      <p>yo</p>
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
            that.setState({ exampleDataLoaded : true, exampleData : data });

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