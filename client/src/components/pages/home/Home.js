import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import SearchHeader from '../../general/headers/SearchHeader';
import Suggestions from './Suggestions';
import Favourites from './Favourites';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			switchPosition: 0,
			tabIndex: 0
		}
		this.countOfTabs = 2;
	}
	getActiveTab(index){
		if(index === this.state.tabIndex){
			return "active";
		}
		return "";
	}

	setPositionActiveTabIndicator(){
		return `${this.state.switchPosition*(100/this.countOfTabs)}%`;
	}

	changeTabIndexWithClick(tabIndex){
		this.setState({
			tabIndex,
			switchPosition: tabIndex
		});
	}


	render() {
		return (
			<div className="page home">
      	<SearchHeader />
				<div className="tab_wrapper">
					<div className="tabs">
						<ul>
							<li
								onClick={() => this.changeTabIndexWithClick(0)}
								className={this.getActiveTab(0)}
							>
								Suggestions
							</li>
							<li
								onClick={() => this.changeTabIndexWithClick(1)}
								className={this.getActiveTab(1)}
							>
								Favourites
							</li>
						</ul>
						<div style={{left: `${this.setPositionActiveTabIndicator()}`}} className="active_tab_indicator"></div>
					</div>
				</div>
				<SwipeableViews
					index={this.state.tabIndex}
					onChangeIndex={(tabIndex) => this.setState({tabIndex})}
					onSwitching={(switchPosition) => this.setState({switchPosition})}
					className="slides"
				>
					<Suggestions />
					<Favourites />
				</SwipeableViews>
			</div>
    );
	}
}


export default Home;
