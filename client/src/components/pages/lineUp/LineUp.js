import React, { Component } from 'react';
import SelectHeader from '../../general/headers/SelectHeader';
import Card from '../../general/Card';
import Artist from '../../general/Artist.js';
import SwipeableViews from 'react-swipeable-views';

class LineUp extends Component {
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
      <div className="page line_up">
        <SelectHeader
          backButton={true}
          history={this.props.history}
        />
        <SwipeableViews
					index={this.state.tabIndex}
					onChangeIndex={(tabIndex) => this.setState({tabIndex})}
					onSwitching={(switchPosition) => this.setState({switchPosition})}
					className="slides"
				>
          <div>test</div>
          <div>test</div>
				</SwipeableViews>
      </div>
    );
	}
}

export default LineUp;
