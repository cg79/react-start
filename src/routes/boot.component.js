import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Boot extends Component {
  render() {

    return (
      <div style={{padding: 10}}>
        <h1>Routing</h1>
        <p>
          {'The '}
          <Link to="/home">HOME</Link>
          {' page currently has two components, "TopBar" and "HomeContent."'}
        </p>
        <p>
          {'There is a "Login" button in each.'}
        </p>
      </div>
    );
  }
}
