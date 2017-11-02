import React from 'react';
import Modal from 'react-modal';

const customStyles = {
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
    width: '475px',
    height: '400px',
    borderRadius : '10px'
  }
};

class LoginModal extends React.Component {

  render() {
    return (
      <Modal
        isOpen={this.props.state.modal2IsOpen}
        onRequestClose={this.props.closeModal2}
        style={customStyles}
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
