import React from 'react';
/*	//import UserItem from './logIn/userItem';	*/
/*	//import { Redirect } from 'react-router-dom';	*/
/*	import { push } from 'react-router-redux';	*/

export default class UserEdit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};

		if (this.props.match) {
			const { userId } = this.props.match.params;
			const userForEdit = props.usersStore.users.find(el => el.id.value === userId);

			if (userForEdit) {
				this.state.userEdit = {
					...userForEdit,
					name: {...userForEdit.name}
				};
			};
		}

		this.changeName = this.changeName.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	onNavigateHome = () => {
		window.history.back();
	};

	changeName(e) {
		debugger;
		const { userEdit } = this.state;

		userEdit.name.first = e.target.value;
		this.setState({userEdit} );
	}

	updateUser(e) {
		debugger;
		this.props.updateUser(this.state.userEdit);
		this.props.history.push('/home');
	}

	render() {
		if (!this.state.userEdit) {
			return false;
		}
		const { name } = this.state.userEdit;

		return (
			<div className="App">

				<form onSubmit={this.onSubmit}>
					<input type="text" value={name.first} onChange={this.changeName} />

					<input type="submit" value="Update" onClick={this.updateUser} />
				</form>
					<button type="submit" onClick={this.onNavigateHome}>Back</button>
			</div>


		);
	}
}

