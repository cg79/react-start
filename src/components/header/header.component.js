import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '../common/button/button.component';


const color={
    userStyle:{
        color: 'black',
        fontSize: '25px',
        background: 'hsl(0, 0%, 86%)',
        borderRadius: '30px'
    },
    user:{
        color: 'black',
        fontSize: '20px'
    }
};

export default class Header extends Component {
  constructor(props)
  {
      // debugger;
      super(props);
      this.state = {
          loggedUser:  this.props.usersStore.loggedUser
      };
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.signup = this.signup.bind(this);
  }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState(
            {
                loggedUser: nextProps.usersStore.loggedUser
            }
        );
    }
    signup = () => {
      debugger;
    };

    logout = () => {
        this.props.logout(null);
   };

    login = () => {
        this.props.login({name:'John'});
    };

  render() {
      const { name } = this.props.login;
      const initials = name ? name.substring(0,2).toUpperCase(): '';

      return <header style={{
          height: 48,
          width: '100%',
          backgroundColor: 'rgb(102,63,180)',
          color: 'white',
          padding: '6px 10px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
      }}
      >
          <div style={styles.logo}>
              <Link to="/">
                  <img alt={'logo'} style={{maxHeight: 40, flex: 1}} src="favicon-196x196.png"/>
              </Link>
          </div>
          <div>
              {'Modus Create'}
          </div>
          <div style={{float: 'left', color: 'white', flex: 1}}/>
          <div style={{float: 'right', paddingRight: 20}}>
              {this.state.loggedUser &&
              <div>


                    <span style={{...color.userStyle, ...this.props.style}}>
                        <span style={{...color.user, ...this.props.style}}> {initials}</span>
                    </span>
                  <Button style={{backgroundColor: 'red', color: 'white'}} click={this.logout}>Logout</Button>
              </div>
              }
              {!this.state.loggedUser &&
              <Button style={{backgroundColor: 'blue', color: 'white'}} click={this.login}>Login</Button>
              }
              {!this.state.loggedUser &&
              <Button style={{backgroundColor: 'red', color: 'white'}} click={this.signup}>Signup</Button>
              }
          </div>
      </header>;
  } 
}

const styles = {
  logo: {
    float:  'left',
    margin: 8
  }
};

