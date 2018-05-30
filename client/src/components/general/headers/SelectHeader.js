import React, { Component } from 'react';

class SelectHeader extends Component {

  returnBack(event){
		event.preventDefault();
		this.props.history.goBack();
	}
	generateBackButton(){
		if(this.props.backButton){
			return (
				<form onSubmit={(event) => this.returnBack(event)} className="back_button_form">
					<input
						type="image"
						src="/icons/back_button.svg"
					/>
				</form>
			)
		}
	}

	render() {
		return (
      <div className="header">
      	{this.generateBackButton()}
        <div className="select_wrapper">
          <select>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </select>
          <img className="select_button" src="/icons/select_button.svg" />
        </div>
      </div>
    );
	}
}

export default SelectHeader;
