import { Link } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import AccountInfoContainer from './account_info_container';
import AccountEditFormContainer from './account_edit_form_container';
import AccountHeader from '../shared/header'

class Account extends React.Component{


  render() {
    return (
      <div className="main">
        <AccountHeader logout={this.props.logout}/>


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
                    <Link to="/account" className="side-nav-link"><li className="side-nav-item">Become a Tasker</li></Link>
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
