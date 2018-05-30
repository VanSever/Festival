import React, { Component } from 'react';

class Card extends Component {
	generateTitle(){
		if(this.props.title){
			return <h2 className="card_title">{this.props.title}</h2>;
		}
	}
	styleForList(){
		if(this.props.listWithTitle){
			return "card_with_list";
		}
		return "";
	}
	render() {
		return (
      <section className={`card ${this.styleForList()}`}>
				{this.generateTitle()}
				{this.props.children}
      </section>
    );
	}
}

export default Card;
