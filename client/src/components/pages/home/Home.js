import React, { Component } from 'react';

import SearchHeader from '../../general/headers/SearchHeader';
import Tabs from '../../general/Tabs';
import Suggestions from './Suggestions';
import Favourites from './Favourites';

class Home extends Component {

	render() {
		return (
			<div className="page home">
      	<SearchHeader />
				<Tabs tabNames={["Suggestions", "Favourites"]}>
					<Suggestions />
					<Favourites />
				</Tabs>
			</div>
    );
	}
}


export default Home;
