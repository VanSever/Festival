import React, { Component } from 'react';
import FestivalSuggestions from './FestivalSuggestions';
import { compose, graphql } from 'react-apollo';

class Suggestions extends Component {
	generateFestivalSuggestions(){
		return(
			<FestivalSuggestions />
		)
	}
	render() {
		return (
      <div className="slide">
				{this.generateFestivalSuggestions()}
      </div>
    );
	}
}

export default Suggestions;

/*
export default compose(
	graphql(query, {
		options: () => {return {
			variables: {
				ErasmusID: GlobalVar.ErasmusID,
			}
		}}
	})
)(Suggestions);
*/
