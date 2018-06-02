import React, { Component } from 'react';
import Rating from './Rating';

class Artist extends Component {
	render() {
		return (
      <li>
        <img src="" />
        <div className="titles">
          <h2>Whitney</h2>
          <h3>Main stage</h3>
        </div>
        <Rating />
      </li>
    );
	}
}

export default Artist;
