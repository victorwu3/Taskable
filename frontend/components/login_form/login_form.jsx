import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
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
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input" id="login" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                {errors}
              </div>
              <div className="input-container">
                <label>Password</label>
                <input className="text-input" type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
              </div >
              <button className="login-button">Log In</button>
              <div className="switch-modal">
                <span>Don't have an account?</span>
                <Link to="/signup" className="login-signup-link">
                  <span>Sign up</span>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(LoginForm);
