import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';
import { FacebookLogin } from 'react-facebook-login-component';
import { GoogleLogin } from 'react-google-login-component';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }
  componentWillMount() {
    this.props.clearErrors();
  }
  responseFacebook (response) {
    this.props.fblogin(response.email);
  }

  responseGoogle (googleUser) {
    googleUser = gapi.auth2.getAuthInstance().currentUser.get();
    const profile = googleUser.getBasicProfile();
    var email = profile.getEmail();
    this.props.fblogin(email);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  demoLogin() {
    new Typed("#login", {
      strings: ['guest@taskable.com'],
      typeSpeed: 30
    });
    setTimeout(()=> {
      new Typed("#password" ,{
      strings: ['password'],
      typeSpeed: 30
    });}, 1000);
    setTimeout(()=> this.props.login({email: 'guest@taskable.com', password: 'password'}), 2100);
  }

  render() {
    let errors;
    if (this.props.errors.includes('Invalid email/password combination')) {
      $(document.querySelector('#login')).addClass('error-input');
      errors = (<div className="error-msg">Invalid email/password combination</div>);
    } else {
      errors = (<div></div>);
    }
    // this.props.errors = [];

    return(
      <div className="login-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <div className="login-page-container">
            <Link to="/">
              <img className="logo" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/logo.png" alt=""></img>
            </Link>
            <span>{this.props.errors.includes('No account linked to that Email!') ? this.props.errors : ""}</span>
            <FacebookLogin socialId="307842506360655"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.10"
                       className="loginBtn loginBtn--facebook"
                       buttonText="Login With Facebook"/>
             <GoogleLogin socialId="34772890096-ecl9viiprp71padujbp6d916181pnrb8.apps.googleusercontent.com"
                    className="loginBtn loginBtn--google"
                    scope="email"
                    fetchBasicProfile={true}
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google"/>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>Email Address</label>
                <i className="material-icons modal-icon">mail_outline</i>
                <input className="text-input email-typed" id="login" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                {errors}
              </div>
              <div className="input-container">
                <label>Password</label>
                <i className="material-icons modal-icon">vpn_key</i>
                <input className="text-input password-typed" id="password" type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
              </div >
              <button className="login-button">Log In</button>
              <div className="login-bottom-row">
                <div className="switch-modal">
                  <span>Don't have an account?</span>
                  <Link to="/signup" className="login-signup-link">
                    <span>Sign up</span>
                  </Link>
                </div>
                <div className="demo-login">
                  <div className="login-signup-link" onClick={this.demoLogin}>
                    <span>Demo Login</span>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(LoginForm);
