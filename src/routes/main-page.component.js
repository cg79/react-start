import React, { Component } from 'react';

import HeaderContainer from '../components/header/header.container';
import HomeContainer from '../components/home/home.container';

export default class MainPage extends Component {
	render() {
		return (
			<div className="App">
				<HeaderContainer />
				<HomeContainer />
			</div>
		);
	}
}

