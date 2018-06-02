import React, { Component } from 'react';
import Rating from '../Rating';

class Header extends Component {
	returnBack(event){
		event.preventDefault();
		this.props.history.goBack();
	}
	generateBackButton(){
		if(this.props.backButton){
			return (
				<form onSubmit={(event) => this.returnBack(event)} className="back_button_form">
					<input
						type="image"
						src="/icons/back_button.svg"
					/>
				</form>
			)
		}
	}
	generateTitle(){
		if(this.props.title){
			return <h1>{this.props.title}</h1>;
		}
	}
	generateRightButton(){
		if(this.props.rate){
			return <Rating />;
		}
		if(this.props.like){
			return(
				<form onSubmit={(event) => this.returnBack(event)} className="right_button_form">
					<input
						type="image"
						src="/icons/like_button.svg"
					/>
				</form>
			)
		}
	}
	render() {
		return (
      <div className="header">
				{this.generateBackButton()}
				{this.generateTitle()}
				{this.generateRightButton()}
      </div>
    );
	}
}

export default Header;
