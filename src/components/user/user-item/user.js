import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';

import './user.css';

class UserItem extends React.Component {
	constructor(props) {
		super(props);
	}


    render() {
    	const { id, userName, handlers } = this.props;
    	return (

    		<div className='user-item'>
				First Name: <b>{userName.first} </b>
                Last Name: <b>{userName.last}</b>

                <Link style={{textDecoration: 'none'}}
					class={'user-edit'}
					to={`/users/${id}`} > Edit</Link>

				<button onClick={ () => handlers.select(userName)}>Select</button>

    		</div>
    	);
    }
}



export default UserItem;
