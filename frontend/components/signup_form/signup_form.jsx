import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      zipcode: "",
      phone_num: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }
  //...

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let fnameError;
    let lnameError;
    let emailError;
    let zipcodeError;
    let phoneNumError;
    let passwordError;

    if (this.props.errors.length >0) {

      if (this.props.errors.includes("Fname can't be blank")) {
        fnameError = (
        <div className="error-msg">First name can't be blank</div>
      );} else {
        fnameError = (<div></div>);
      }
      if (this.props.errors.includes("Lname can't be blank")) {
        lnameError = (
        <div className="error-msg">Last name can't be blank</div>
      );} else {
        lnameError = (<div></div>);
      }
      if (this.props.errors.includes("Email can't be blank")) {
        emailError = (
        <div className="error-msg">Email can't be blank</div>
      );} else if (this.props.errors.includes("Email has already been taken")) {
        emailError = (
        <div className="error-msg">Email has already been taken</div>
      );} else {
        emailError = (<div></div>);
      }
      if (this.props.errors.includes("Zipcode can't be blank")) {
        zipcodeError = (
        <div className="error-msg">Zipcode can't be blank</div>
      );} else {
        zipcodeError = (<div></div>);
      }
      if (this.props.errors.includes("Phone num can't be blank")) {
        phoneNumError = (
        <div className="error-msg">Phone Number can't be blank</div>
      );} else {
        phoneNumError = (<div></div>);
      }
      if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
        passwordError = (
        <div className="error-msg">Password is too short (minimum is 6 characters)</div>
      );} else {
        passwordError = (<div></div>);
      }

    }

    return(

      <div className="signup-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <div className="signup-page-container">
            <img className="logo" src="assets/logo.png" alt=""></img>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>First Name</label>
                <input className="text-input" type="text" value={this.state.fname} onChange={this.handleChange('fname')}></input>
                {fnameError}
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input className="text-input" type="text" value={this.state.lname} onChange={this.handleChange('lname')}></input>
                {lnameError}
              </div >
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                {emailError}
              </div >
              <div className="input-container">
                <label>Password</label>
                <input className="text-input" type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
                {passwordError}
              </div >
              <div className="input-container">
                <label>Zip Code</label>
                <input className="text-input" type="text" value={this.state.zipcode} onChange={this.handleChange('zipcode')}></input>
                {zipcodeError}
              </div >
              <div className="input-container">
                <label>Phone Number</label>
                <input className="text-input" type="text" value={this.state.phone_num} onChange={this.handleChange('phone_num')}></input>
                {phoneNumError}
              </div >
              <button className="signup-button">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
