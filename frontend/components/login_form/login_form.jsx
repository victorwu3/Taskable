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
    let errors = this.props.errors.map( (error, i) => {
      return (
        <li key={i}>
          {error};
        </li>
      );
    });

    return(

      <div className="login-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <div className="login-page-container">
            <img className="logo" src="assets/logo.png" alt=""></img>
            <ul>
              {errors}
            </ul>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
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
