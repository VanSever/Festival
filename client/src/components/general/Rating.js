import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class Rating extends Component {
  constructor(props){
    super(props);
    this.state = {
      showRatingOptions: false,
      label: '😶',
      value: 3
    }
  }

  handleClickOutside() {
    this.setState({ showRatingOptions: false });
  }

  showRatingOptions(){
    this.setState({
      showRatingOptions: true
    })
  }

  generateRatingOptions(){
    if(this.state.showRatingOptions){
      return (
        <ul className={`rating_options rating_position_${this.state.value}`}>
          {this.singleRating(1, '💩')}
          {this.singleRating(2, '😒')}
          {this.singleRating(3, '😶')}
          {this.singleRating(4, '😊')}
          {this.singleRating(5, '🤤')}
        </ul>
      )
    }
  }

  singleRating(value, label){
    return (
      <li>
        <form onSubmit={(event) => this.setRating(event, value, label)}>
          <button>{label}</button>
        </form>
      </li>
    );
  }

  setRating(event, value, label){
    event.preventDefault();
    this.setState({
      showRatingOptions: false,
      label,
      value
    })
  }

	render() {
		return (
      <div className="button_form">
        <button
          onClick={() => this.showRatingOptions()}
          className="emoji_button"
        >
          {this.state.label}
        </button>
        {this.generateRatingOptions()}
      </div>
    );
	}
}

export default enhanceWithClickOutside(Rating);
