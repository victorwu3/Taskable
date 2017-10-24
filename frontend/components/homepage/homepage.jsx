import React from 'react';
import { Link } from 'react-router-dom';
class Homepage extends React.Component{

  render(){

      return(
        <div>
          <h1>Welcome to Taskable!</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    }

  }

export default Homepage;
