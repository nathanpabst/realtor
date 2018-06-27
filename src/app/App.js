import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import Listings from '../components/Listings/Listings';
import Buildings from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  componentDidMount () {
    connection();
  }
  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings />
        </div>
        <div className="col-sm-6">
          <Buildings />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
