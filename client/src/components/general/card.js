import React, { Component } from 'react';

class Card extends Component {
	generateTitle(){
		if(this.props.title){
			return <h2 className="card_title">{this.props.title}</h2>;
		}
	}
	render() {
		return (
      <section className="card">
				{this.generateTitle()}
				{this.props.children}
      </section>
    );
	}
}

export default Card;
