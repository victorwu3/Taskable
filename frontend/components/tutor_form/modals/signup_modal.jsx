import React from 'react';
import Modal from 'react-modal';


const signupStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    background: 'rgba(0, 0, 0, 0.5)'
  },
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxHeight                : '640px',
    width : '475px',
    borderRadius : '10px'
  }
};

class SignupModal extends React.Component {


  render() {
    return (
      <Modal
        isOpen={this.props.state.modalIsOpen}
        onRequestClose={this.props.closeModal}
        style={signupStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-top-row">
          <div className="signup-modal-title">Create an Account</div>
          <i class="material-icons modal-close" onClick={this.props.closeModal}>close</i>
        </div>
        <div className="signup-sub">You'll be able to review everything before booking</div>
        <form className="signup-modal-form" onSubmit={this.props.handleSignUp}>
          <div className="name-container">
            <div className="name-input-container">
              <label>First Name</label>
              <i className="material-icons modal-icon">person_outline</i>
              <input className="modal-input" id="fname" type="text" value={this.props.state.fname} onChange={this.props.handleChange('fname')}></input>
              {this.props.fnameError}
            </div>
            <div className="name-input-container">
              <label>Last Name</label>
              <input className="modal-input" id="lname" type="text" value={this.props.state.lname} onChange={this.props.handleChange('lname')}></input>
              {this.props.lnameError}
            </div >
          </div>
          <div className="modal-container">
            <label>Email Address</label>
            <i className="material-icons modal-icon">mail_outline</i>
            <input className="modal-input" id="email" type="text" value={this.props.state.email} onChange={this.props.handleChange('email')}></input>
            {this.props.emailError}
          </div >
          <div className="modal-container">
            <label>Password</label>
            <i className="material-icons modal-icon">vpn_key</i>
            <input className="modal-input" id="password" type="password" value={this.props.state.password} onChange={this.props.handleChange('password')}></input>
            {this.props.passwordError}
          </div >
          <div className="modal-container">
            <label>Zip Code</label>
            <i className="material-icons modal-icon">place</i>
            <input className="modal-input" id="zip" type="text" value={this.props.state.zipcode} onChange={this.props.handleChange('zipcode')}></input>
            {this.props.zipcodeError}
          </div >
          <div className="modal-container">
            <label>Phone Number</label>
            <i className="material-icons modal-icon">phone</i>
            <input className="modal-input" id="phone" type="text" value={this.props.state.phone_num} onChange={this.props.handleChange('phone_num')}></input>
            {this.props.phoneNumError}
          </div >
          <button className="signup-button modal-button">Create Account</button>
          <div className="switch-modal">
            <span>Have an account?</span>
            <div className="signup-login-link" onClick={this.props.openLogIn}>
              <span>Log in</span>
            </div>
          </div>
        </form>
      </Modal>
    )
  }
}

export default SignupModal;
