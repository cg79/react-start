import { connect } from 'react-redux';
import  UserActions   from '../user/actions/user.actions';
import Header from "./header.component";

const mapStateToProps = store => ({
    usersStore: store.userReducer
});

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(UserActions.userLoogedIn(data)),
    logout : () => dispatch(UserActions.userLogedOut())
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
