import React, { Component } from 'react';

import Portfolio from '../Cards/Portfolio';
import Footer from './Footer/Footer';

export default class Site extends Component {

  render() {
    return (
      <div>
        <Portfolio />
        <Footer />
      </div>
    )
  }
}