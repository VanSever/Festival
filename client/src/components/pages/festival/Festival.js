import React, { Component } from 'react';
import Header from '../../general/headers/Header';
import Banner from '../../general/Banner';
import Card from '../../general/Card';
import Artist from './Artist.js';

class Festival extends Component {
	render() {
		return (
      <div className="page festival">
        <Header
					history={this.props.history}
					backButton={true}
					title="Couleur café"
					like={true}
				/>
				<Banner
					imgLink="http://www.beslack.be/sites/default/files/content/images/couleur_cafe.jpg"
				/>
				<Card>
					<ul className="list_key_value">
						<li>
							<p className="key">Period</p>
							<p className="value">27 june until 1 juli 2018</p>
						</li>
						<li>
							<p className="key">Price</p>
							<p className="value">150$ all days</p>
						</li>
						<li>
							<p className="key">Website</p>
							<p className="value"><a className="external_link" href="https://www.couleurcafe.be/en/">Couleurcafe.be</a></p>
						</li>
					</ul>
				</Card>

				<Card title="Headliners">
					<ul className="list_img_title_subtitle_icon">
						<Artist />
						<Artist />
						<Artist />
						<Artist />
					</ul>
				</Card>
      </div>
    );
	}
}

export default Festival;
