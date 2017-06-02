import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import './App.styl';

import Portfolio  from './Cards/Portfolio'
import Site       from './Site/Site'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={ browserHistory }>
          <Route path="/" component={ Site }>
            <Route path="portfolio" name="portfolio" component={ Portfolio }></Route>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
