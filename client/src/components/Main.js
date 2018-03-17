import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../style/css/main.css';

import Home from './pages/home/Home';
import Festival from './pages/festival/Festival';

class Main extends Component {
  render() {
  	return (
  		<div className="content">
  			<Route path="/home" component={Home} />
        <Route path="/festival/:festivalID" component={Festival} />
  		</div>
	  );
  }
}

export default Main;
