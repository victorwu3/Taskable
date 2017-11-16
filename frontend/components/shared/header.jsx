import React from 'react';
import { Link } from 'react-router-dom';

class AccountHeader extends React.Component{

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header-container">
        <header className="page-header">
          <div className="header-elements-container">
            <Link className="header-logo" to="/dashboard" ></Link>
            <div className="header-links-container">
              <Link to="/dashboard" className="homepage-login-button">
                <span>Dashboard</span>
              </Link>
              <Link to="/account" className="homepage-login-button">
                <span>Account</span>
              </Link>
              <span onClick={this.props.logout} className="homepage-signup-button">Logout</span>
            </div>
          </div>
        </header>
      </div>
    )

  }

}


export default AccountHeader;
