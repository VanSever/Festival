import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArtistSuggestion extends Component {

	render() {
		return (
      <section className="artist">
        <div className="black_foreground"></div>
        <div className="info_div">
          <h3>{this.props.artistName}</h3>
          <form>
            <input
              type="image"
              src="/icons/play_button.svg"
              className="play_button"
            />
          </form>
          <Link to="/">
            <img src="/icons/more_button.svg" className="more_button" />
          </Link>
        </div>
        <img className="artist_img" src={this.props.artistImgLink} />
      </section>
    );
	}
}

export default ArtistSuggestion;
