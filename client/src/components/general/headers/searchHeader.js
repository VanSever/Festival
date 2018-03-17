import React, { Component } from 'react';

class SearchHeader extends Component {

	render() {
		return (
      <div className="search_header">
      	<form>
					<input type="text" placeholder="Search any festival"></input>
				</form>
      </div>
    );
	}
}

export default SearchHeader;
