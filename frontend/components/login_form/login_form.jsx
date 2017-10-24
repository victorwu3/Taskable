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
  //...

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    // debugger
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let errors;
    if (this.props.errors.includes('Invalid email/password combination')) {
      errors = (<div className="error-msg">Invalid email/password combination</div>);
    } else {
      errors = (<div></div>);
    }

    return(

      <div className="login-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <div className="login-page-container">
            <img className="logo" src="assets/logo.png" alt=""></img>
            <ul>
            </ul>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
                {errors}
              </div>
              <div className="input-container">
                <label>Password</label>
                <input className="text-input" type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
              </div >
              <button className="login-button">Log In</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(LoginForm);
