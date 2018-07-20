import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../database/exampledata.js'

import $ from 'jquery';
// console.log(data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }

  }

  render () {
    return (<div>
      <p>yo</p>
    </div>)
  }

  componentDidMount() {
    // for now, send a request to get fake data from server
    $.ajax({
      url: '/fake',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log('failed to connect to the server');
      }
    });
  }
}

ReactDOM.render(<App />, document.getElementById('app'))