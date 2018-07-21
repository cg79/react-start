import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
	button: {
		width:   100,
		margin:  8,
		padding: 8
	}
};

export default class Button extends Component {
    constructor(props)
    {
        super(props);

    }

    click = () => {
    	this.props.click();
	};

	render() {
		return (
			<button style={{...styles.button, ...this.props.style}} onClick={this.click}>
				{this.props.children}
			</button>
		);
	}
}


