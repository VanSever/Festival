import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../general/Card';
import ArtistSuggestion from './ArtistSuggestion';

class festivalSuggestions extends Component {

	render() {
		return (
      <Card>
        <header className="img_title">
          <img src="http://www.beitlive.com/wp-content/uploads/2016/06/Kc9UcKLp.jpg" />
          <div className="titles">
            <h2>Couleur café</h2>
            <h3>27 juni tot 1 juli 2018</h3>
          </div>
        </header>
        <div className="artist_list">
          <ArtistSuggestion
            artistName="Whitney"
            artistImgLink="https://media1.fdncms.com/sevendaysvt/imager/u/original/3736637/musicfeature1-1-bdc4ffc6b92c14b1.jpg"
          />
          <ArtistSuggestion
            artistName="Nirvana"
            artistImgLink="https://media.pitchfork.com/photos/5929951f5e6ef9596931f1d0/1:1/w_300/2f8f1925.jpg"
          />
          <ArtistSuggestion
            artistName="Red Hot Chili Peppers"
            artistImgLink="https://upload.wikimedia.org/wikipedia/commons/9/9b/Red_Hot_Chili_Peppers_2012-07-02_001.jpg"
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
