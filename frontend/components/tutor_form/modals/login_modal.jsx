import React from 'react';
import Modal from 'react-modal';

class LoginModal extends React.Component {

  render() {
    return (
      <Modal
        isOpen={this.props.state.modal2IsOpen}
        onRequestClose={this.props.closeModal2}
        style={this.props.customStyles}
        contentLabel="Example Modal"
      >
        <div className="signup-modal-title">Please log in to continue.</div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="modal-container">
            <label>Email Address</label>
            <i className="material-icons modal-icon">mail_outline</i>
            <input className="modal-input" id="login" type="text" value={this.props.state.email} onChange={this.props.handleChange('email')}></input>
            {this.props.errors}
          </div>
          <div className="modal-container">
            <label>Password</label>
            <i className="material-icons modal-icon">vpn_key</i>
            <input className="modal-input" type="password" value={this.props.state.password} onChange={this.props.handleChange('password')}></input>
          </div >
          <button className="login-button modal-button">Log In</button>
          <div className="switch-modal">
            <span>Don't have an account?</span>
            <div className="signup-login-link" onClick={this.props.openSignUp}>
              <span>Sign up</span>
            </div>
          </div>
        </form>
      </Modal>
    )
  }
}

export default LoginModal;
