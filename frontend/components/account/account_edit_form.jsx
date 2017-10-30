import { Link } from 'react-router-dom';
import React from 'react';

class AccountEditForm extends React.Component {
  constructor(props){
    super(props);
    let user = props.currentUser;
    this.state = {
      email: user.email,
      fname: user.fname,
      lname: user.lname,
      zipcode: user.zipcode,
      phone_num: user.phone_num
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateUser({user: user, user_id: this.props.currentUser.id}).then(() => this.props.history.push('/account'));
  }

  render() {
    let user = this.props.currentUser;

    return (
      <div className="account-info">
        <div className="account-info-row">
          <div className="account-info-title-container">
            <span className="account-info-title">Account</span>
          </div>
          <Link to="/account/" className="homepage-signup-button" >Cancel</Link>
        </div>
        <div className="account-info-container">
          <div className="account-picture-container">
            <img className="account-picture" src={user.image_url} />
            <label className="upload-photo-label">
              <span>Upload a new photo</span>
            </label>
          </div>
          <div className="account-infos-container">
            <form onSubmit={this.handleSubmit}>
              <div className="account-form-name">
                <div className="input-container edit-input">
                  <label>First Name</label>
                  <input className="text-input" id="fname" type="text" value={this.state.fname} onChange={this.handleChange('fname')}></input>
                </div>
                <div className="input-container edit-input">
                  <label>Last Name</label>
                  <input className="text-input" id="lname" type="text" value={this.state.lname} onChange={this.handleChange('lname')}></input>
                </div >
                <div className="input-container edit-input">
                  <label>Email Address</label>
                  <input className="text-input" id="email" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                </div >
                <div className="input-container edit-input">
                  <label>Zip Code</label>
                  <input className="text-input" id="zip" type="text" value={this.state.zipcode} onChange={this.handleChange('zipcode')}></input>
                </div >
                <div className="input-container edit-input">
                  <label>Phone Number</label>
                  <input className="text-input" id="phone" type="text" value={this.state.phone_num} onChange={this.handleChange('phone_num')}></input>
                </div >
              </div>
              <button className="edit-form-btn">Update Information</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountEditForm;
