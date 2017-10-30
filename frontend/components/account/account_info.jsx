import { Link } from 'react-router-dom';
import React from 'react';

class AccountInfo extends React.Component {


  render() {
    let user = this.props.currentUser;

    return (
      <div className="account-info">
        <div className="account-info-row">
          <div className="account-info-title-container">
            <span className="account-info-title">Account</span>
          </div>
          <Link to="/account/edit" className="homepage-signup-button" >Edit</Link>
        </div>
        <div className="account-info-container">
          <div className="account-picture-container">
            <img className="account-picture" src={user.image_url} />
          </div>
          <div className="account-infos-container">
            <ul className="account-list">
              <li>
                <i className="material-icons">person</i>
                <span className="user-info-blurb">{user.fname.charAt(0).toUpperCase() + user.fname.slice(1)} {user.lname.slice(0,1).toUpperCase() + user.lname.slice(1)}</span>
              </li>
              <li>
                <i className="material-icons">mail_outline</i>
                <span className="user-info-blurb">{user.email}</span>
              </li>
              <li>
                <i className="material-icons">phone</i>
                <span className="user-info-blurb">{user.phone_num}</span>
              </li>
              <li>
                <i className="material-icons">location_on</i>
                <span className="user-info-blurb">{user.zipcode}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
