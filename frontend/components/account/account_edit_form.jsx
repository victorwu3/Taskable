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
      phone_num: user.phone_num,
      imageFile: null,
      imageUrl: user.image_url
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    const file = this.state.imageFile;
    const userId = this.props.currentUser.id;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append("user[fname]", this.state.fname);
    formData.append("user[lname]", this.state.lname);
    formData.append("user[zipcode]", this.state.zipcode);
    formData.append("user[email]", this.state.email);
    formData.append("user[phone_num]", this.state.phone_num);
    formData.append("user[id]", userId);
    if (file) formData.append("user[image]", file);
    this.props.updateUser(formData, userId).then(() => this.props.history.push('/account'));
  }

  updateFile(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
            <img className="account-picture" src={this.state.imageUrl} />
            <input type="file" className="upload-photo-label" onChange={this.updateFile}></input>
            <span>Upload a new photo</span>
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
