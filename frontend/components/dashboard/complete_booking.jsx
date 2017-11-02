import Modal from 'react-modal';
import React from 'react';
import { withRouter } from 'react-router-dom';

class CompleteBooking extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      body: "",
      positive: true,
      author_id: props.author
    };
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let params = {
      user_id: parseInt(localStorage.getItem('reviewUserId')),
      author_id: this.state.author_id,
      positive: this.state.positive,
      body: this.state.body,
      subject_id: parseInt(localStorage.getItem('reviewSubjectId')),
      booking_id: parseInt(localStorage.getItem('bookingId'))
    }
    debugger
    this.props.updateBooking(params).then(this.props.createReview(params).then(()=>this.props.history.push('/')));
  }

  render() {
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

    let booking = this.props.booking;
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="signup-modal-title">Please leave a review.</div>
        <form onSubmit={this.handleSubmit}>
          <div className="modal-container">
            <label className="feedback">Feedback</label>
            <textarea className="description" rows="8" cols="80" onChange={this.handleChange('body')}></textarea>
          </div>
          <ul className="positive-radio">
            <fieldset className="radio-buttons positive-radio" id="group1" onChange={this.handleChange('positive')}>
              <li className="positive-radio">
                <label className="form-radio-btn"><input type="radio" id="k8" name="group1" value="true" defaultChecked></input>
                Positive</label>
              </li>
              <li>
                <label><input type="radio" id="hs" name="group1" value="false"></input>
                Negative</label>
              </li>
            </fieldset>
          </ul>
          <button className="login-button modal-button">Submit</button>
        </form>
      </Modal>
    );
  }
}

export default withRouter(CompleteBooking);
