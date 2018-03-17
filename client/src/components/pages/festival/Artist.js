import React, { Component } from 'react';
import Rating from '../../general/Rating';

class Artist extends Component {
	render() {
		return (
      <li>
        <img src="https://cdn.baeblemusic.com/images/bblog/9-15-2016/whitneybandblog-580.jpg" />
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
