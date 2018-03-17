import React, { Component } from 'react';

class Banner extends Component {
	render() {
    const blurryImgStyle = {
      backgroundImage: `url(${this.props.imgLink})`
    };
		return (
      <div className="banner">
        <img src={this.props.imgLink} />
        <div className="blurry_img" style={blurryImgStyle} />
      </div>
    );
	}
}

export default Banner;
