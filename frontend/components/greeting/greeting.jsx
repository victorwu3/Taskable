import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component{

  render(){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return(
        <div>
          <h1>Welcome to Taskable, {currentUser.fname}!</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

}

export default Greeting;
