import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../style/css/main.css';

import Home from './pages/home/Home';
import Festival from './pages/festival/Festival';
import Artist from './pages/artist/Artist';
import LineUp from './pages/lineUp/LineUp';

class Main extends Component {
  render() {
  	return (
  		<div className="content">
  			<Route path="/home" component={Home} />
        <Route path="/festival/:festivalID" component={Festival} />
        <Route path="/artist/:artistID" component={Artist} />
        <Route path="/lineup/:festivalID/:day" component={LineUp} />
  		</div>
	  );
  }
}

export default Main;
