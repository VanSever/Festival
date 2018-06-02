import React, { Component } from 'react';
import Card from '../../general/Card';

class Favourites extends Component {

	render() {
		return (
      <div className="slide farourite_festivals">
        <Card title="Saved festivals">
					<ul className="list_img_title_subtitle_icon">
						<li>
							<img src="" />
							<div className="titles">
								<h2>Couleur café</h2>
								<h3>27 juni tot 1 juli 2018</h3>
							</div>
							<form className="remove_button_form">
		            <input
		              type="image"
		              src="/icons/remove_button.svg"
		            />
		          </form>
						</li>
						<li>
							<img src="" />
							<div className="titles">
								<h2>Couleur café</h2>
								<h3>27 juni tot 1 juli 2018</h3>
							</div>
							<form className="button_form">
		            <input
		              type="image"
		              src="/icons/remove_button.svg"
		            />
		          </form>
						</li>
					</ul>
				</Card>
      </div>
    );
	}
}

export default Favourites;
