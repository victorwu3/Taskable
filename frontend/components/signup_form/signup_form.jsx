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
    return(

      <div className="signup-page">
        <div className="login-background"></div>
        <div className="login-signup-panel">
          <ul>
            {this.props.errors.map((error, i)=> {
              return (
                <li key={i}>
                  {error.responseText}
                </li>
              );
            })}
          </ul>
          <div className="signup-page-container">
            <img className="logo" src="assets/logo.png" alt=""></img>
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <div className="input-container">
                <label>First Name</label>
                <input className="text-input" type="text" value={this.state.fname} onChange={this.handleChange('fname')}></input>
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input className="text-input" type="text" value={this.state.lname} onChange={this.handleChange('lname')}></input>
              </div >
              <div className="input-container">
                <label>Email Address</label>
                <input className="text-input" type="text" value={this.state.email} onChange={this.handleChange('email')}></input>
              </div >
              <div className="input-container">
                <label>Password</label>
                <input className="text-input" type="password" value={this.state.password} onChange={this.handleChange('password')}></input>
              </div >
              <div className="input-container">
                <label>Zip Code</label>
                <input className="text-input" type="text" value={this.state.zipcode} onChange={this.handleChange('zipcode')}></input>
              </div >
              <div className="input-container">
                <label>Phone Number</label>
                <input className="text-input" type="text" value={this.state.phone_num} onChange={this.handleChange('phone_num')}></input>
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
