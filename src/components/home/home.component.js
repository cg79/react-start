import React, {Component} from 'react';
import Button from '../common/button/button.component';
import UserList  from '../user/user-list/user-list.component';


export default class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            loggedUser:  this.props.usersStore.loggedUser,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState(
            {
                loggedUser: nextProps.usersStore.loggedUser,
            }
        );
    };

    logout = () => {
        this.props.logout(null);
    };
    login = () => {
        this.props.login({name:'John'});
    };
  render() {
    return(
      <div>
          {this.state.loggedUser &&

          <Button style={{backgroundColor: 'red', color: 'white'}} click={this.logout}>Logout</Button>

          }
          {!this.state.loggedUser &&
          <Button style={{backgroundColor: 'blue', color: 'white'}} click={this.login}>Login</Button>
          }
          <UserList userlist={this.props.usersStore.users} getUsersFromContainer={this.props.getUsersFromContainer}/>
      </div>
    );
  }
}