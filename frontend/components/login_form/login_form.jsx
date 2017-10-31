import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';
import { FacebookLogin } from 'react-facebook-login-component';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  responseFacebook (response) {
    debugger
    console.log(response);
    this.props.fblogin(response.email);
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

    return(
      <div className="login-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <div className="login-page-container">
            <img className="logo" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/logo.png" alt=""></img>
            <span>{this.props.errors}</span>
              <FacebookLogin socialId="307842506360655"
                         language="en_US"
                         scope="public_profile,email"
                         responseHandler={this.responseFacebook}
                         xfbml={true}
                         fields="id,email,name"
                         version="v2.10"
                         className="facebook-login"
                         buttonText="Login With Facebook"/>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input email-typed" id="login" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                {errors}
              </div>
              <div className="input-container">
                <label>Password</label>
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
