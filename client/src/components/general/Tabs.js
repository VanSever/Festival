import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

class Tabs extends Component {
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

  generateTabs(){
    return this.props.tabNames.map((name, index) => {
      return (
        <li
          onClick={() => this.changeTabIndexWithClick(index)}
          className={this.getActiveTab(index)}
          key={index}
        >
          {name}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="tab_wrapper">
          <div className="tabs">
            <ul>
              {this.generateTabs()}
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
          {this.props.children}
        </SwipeableViews>
      </div>
    );
  }
}

export default Tabs;
