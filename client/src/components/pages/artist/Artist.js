import React, { Component } from 'react';
import Header from '../../general/headers/Header';
import Banner from '../../general/Banner';
import Card from '../../general/Card';
import Artist from '../../general/Artist.js';
import { Link } from 'react-router-dom';

class Festival extends Component {
	render() {
		return (
      <div className="page festival">
        <Header
					history={this.props.history}
					backButton={true}
					title="Whitney"
					rate={true}
				/>
				<Banner
					imgLink=""
				/>


      </div>
    );
	}
}

export default Festival;
