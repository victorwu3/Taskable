import { Link } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AccountInfoContainer from './account_info_container';
import AccountEditFormContainer from './account_edit_form_container';

class Account extends React.Component{


  render() {
    return (
      <div className="main">
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

        <div className="account-container">
          <h1>
            <span>Your Account</span>
          </h1>
          <div className="account-box">
            <div className="account-portal">
              <div className="account-panel">
                <div>
                  <ul className="side-nav">
                    <Link to="/account" className="side-nav-link"><li className="side-nav-item">Profile</li></Link>
                    <Link to="/account" className="side-nav-link"><li className="side-nav-item">Password</li></Link>
                    <Link to="/account" className="side-nav-link"><li className="side-nav-item">Billing Info</li></Link>
                    <Link to="/account" className="side-nav-link"><li className="side-nav-item">Deactivate Account</li></Link>
                  </ul>
                </div>
              </div>
              <Switch>
                <Route path="/account/edit" component={AccountEditFormContainer} />
                <Route path="/account" component={AccountInfoContainer} />
              </Switch>
            </div>

          </div>
        </div>
      </div>
    );
  }
}



export default Account;
