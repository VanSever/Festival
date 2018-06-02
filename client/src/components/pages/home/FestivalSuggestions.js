import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../general/Card';
import ArtistSuggestion from './ArtistSuggestion';

class festivalSuggestions extends Component {

	render() {
		return (
      <Card>
        <header className="img_title">
          <img src="" />
          <div className="titles">
            <h2>Couleur café</h2>
            <h3>27 juni tot 1 juli 2018</h3>
          </div>
        </header>
        <div className="artist_list">
          <ArtistSuggestion
            artistName="Whitney"
            artistImgLink=""
          />
          <ArtistSuggestion
            artistName="Nirvana"
            artistImgLink=""
          />
          <ArtistSuggestion
            artistName="Red Hot Chili Peppers"
            artistImgLink=""
          />
        </div>
        <div className="more_info_festival">
          <h3>Atomiumsquare Brussel</h3>
          <p>Floris Van Sever, Sara Lemaire, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum are going</p>
          <div className="two_button_wrapper">
            <form><button>Save</button></form>
            <Link to="/festival/1" className="button_link">More info</Link>
          </div>
        </div>
      </Card>
    );
	}
}

export default festivalSuggestions;
