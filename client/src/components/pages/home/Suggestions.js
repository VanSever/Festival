import React, { Component } from 'react';
import FestivalSuggestions from './FestivalSuggestions';

class Suggestions extends Component {

	render() {
		return (
      <div className="slide">
				<FestivalSuggestions />
				<FestivalSuggestions />
				<FestivalSuggestions />
				<FestivalSuggestions />
      </div>
    );
	}
}

export default Suggestions;
