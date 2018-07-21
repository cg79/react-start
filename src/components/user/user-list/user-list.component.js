import React from 'react';
import PropTypes from 'prop-types';

import UserActions from '../actions/user.actions';
import UserItem from '../user-item/user';

class UserList extends React.Component {

    state = {count: 0};

	constructor(props) {
		super(props);
		this.state = {
			Users: this.props.users,
		};
		this.getUsers = this.getUsers.bind(this);
		this.setUsers = this.setUsers.bind(this);

		this.selectUser = this.selectUser.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			...this.state,
			users: nextProps.userlist
		});
	}

	selectUser(user) {
		this.setState({
			selectedUser: user
		});
	}

    setUsers() {
    	this.setState({
    			...this.state,
    			users: [{id:1, text:'def'}]
    		});
    }

   getUsers = () => {
   	this.props.getUsersFromContainer();
   };

    getUsersPromise = () => {
    	UserActions.getUsersPromise()
    		.then((response) => {
    			const data = response.data;
    			data.push({id:1, text :'John'});
    			this.setState({
    				...this.state,
    				users: data
    			});
    		})
    		.catch((err) => {
    			console.log(err);
    		});
    };

    createItem = item => <li key={item.id}>{item.name}</li>;

    render() {
    	const users = this.props.userlist;
		const methods = {
			select: this.selectUser
		};

    	return (
    		<div>
    			<h2>Users</h2>
    			<div>
    				<button onClick={this.props.getUsersFromContainer}>get Users</button>
    			</div>
    			{users &&
                <ul>
                	{
                		users.map((item, index) => (
                			<UserItem
							  key={index}
							  id={item.id.value}
                				userName={item.name}
							  handlers={methods}
                			/>
                		))
                	}
                </ul>

    			}

				{
					this.state.selectedUser &&
					<label>{this.state.selectedUser.first}</label>
				}
				{/*<detail key="{selecteduser.id}" user="{selectedUser}"> //asa se creaza. fara key nu se creaza*/}

    		</div>
    	);
    }
}

UserList.PropTypes = {
    userlist: PropTypes.array
}

export default UserList;
