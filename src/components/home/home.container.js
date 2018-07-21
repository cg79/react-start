import { connect } from 'react-redux';
import UserActions from '../user/actions/user.actions';
import Home from './home.component';

const mapStateToProps = store => ({
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(UserActions.userLoogedIn(data)),
    logout : () => dispatch(UserActions.userLogedOut()),
    getUsersFromContainer : () => dispatch(UserActions.getUsers())
});

const HomeContainer  = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;
