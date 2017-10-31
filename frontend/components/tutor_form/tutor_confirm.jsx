import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TrustBanner from '../shared/trust_banner';

export const SUBJECTS = {
  '1': 'Math',
  '2': 'Chemistry',
  '3': 'Biology',
  '4': 'English',
  '5': 'History',
  '6': 'Test Prep',
  '7': 'Coding',
  '8': 'Accounting',
  '9': 'Physics'
};

class TutorConfirm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tutor: JSON.parse(localStorage.getItem('selectedTutor'))[0],
      description: localStorage.getItem('description'),
    };
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = {
      user_id: this.props.currentUser.id,
      tutor_id: this.state.tutor.id,
      subject_id: parseInt(localStorage.getItem('currentSubject')),
      rate: this.state.tutor.rate,
      date: localStorage.getItem('selectedDate'),
      time_period: localStorage.getItem('selectedTime'),
      description: this.state.description,
      location: localStorage.getItem('address')
    };
    this.props.createBooking(params).then(
      this.props.fetchHiredTutors(this.props.currentUser.id)).then(this.props.history.push('/dashboard'))
      ;
  }

  render(){
    let tutor = this.state.tutor;
    return (

      <div className="main">
        <div className="header-container">
          <header className="page-header">
            <div className="header-elements-container">
              <Link className="header-logo" to="/" ></Link>
            </div>
          </header>
        </div>
          <div className="build-progress">
            <div className="build-progress-container">
              <div className="build-progress-step not-active">
                <i></i>
                <span>1. Fill Out Tutor Details</span>
              </div>
              <div className="build-progress-step not-active">
                <i></i>
                <span>2. View Tutors and Price</span>
              </div>
              <div className="build-progress-step">
                <i></i>
                <span>3. Confirm & Book</span>
              </div>
            </div>
          </div>

          <TrustBanner formType="confirm" />

          <div className="form-container submit-container">
            <div className="form-input-container">
              <div className="confirmation-container">

                <form className="confirm-form" onSubmit={this.handleSubmit}>
                  <div className="confirm-result-top-row">
                    <div className="result-name">{SUBJECTS[JSON.parse(localStorage.getItem('currentSubject'))]}</div>
                    <div className="result-rate">${tutor.rate}/hr</div>
                  </div>
                  <div className="payment-container">
                    <span className="payment-sub">You are charged only after your tutor session is completed.</span>
                    <div className="payment-input-row">
                      <div className="payment-input-box col-lg-4">
                        <span>Credit Card</span>
                        <input type="text"></input>
                      </div>
                      <div className="payment-input-box col-lg-3">
                        <span>Expiration</span>
                        <div className="credit-card-exp-date">
                          <select className="mm">
                            <option>MM</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                          <select className="yyyy">
                            <option>YYYY</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                          </select>
                        </div>
                      </div>
                      <div className="payment-input-box col-lg-2">
                        <span>CVV Code</span>
                        <input type="text" className="cvv"></input>
                      </div>
                      <div className="payment-input-box col-lg-3">
                        <span>Zip Code</span>
                        <input type="text"></input>
                      </div>
                    </div>
                  </div>

                  <div className="confirm-info">
                    <div className="payment-input-row">
                      <div className="date-time-confirm">
                        <label className="confirmation-section-label">
                          <span className="confirm-sub">Date & Time</span>
                        </label>
                        <div className="confirmation-date-time">
                          <span>{localStorage.getItem('selectedDay')}</span>
                          <span>, {localStorage.getItem('selectedDate')}</span>
                          <span> ({localStorage.getItem('selectedTime')})</span>
                        </div>
                      </div>
                      <div className="confirm-tutor-info">
                        <div className="confirm-tutor-pic">
                          <img className="confirm-picture" src={tutor.image_url} />
                        </div>
                        <div className="confirm-tutor-name">
                          <span>Tutor</span>
                          <span className="tutor-name">{tutor.fname.charAt(0).toUpperCase() + tutor.fname.slice(1)} {tutor.lname.slice(0,1).toUpperCase()}.</span>
                        </div>
                      </div>
                    </div>
                    <div className="date-time-confirm">
                      <label className="confirmation-section-label">
                        <span className="confirm-sub">Address</span>
                      </label>
                      <div className="confirmation-date-time">
                        <span>{localStorage.getItem('address')}</span>
                      </div>
                    </div>
                    <div className="date-time-confirm">
                      <label className="confirmation-section-label">
                        <span className="confirm-sub">Tutor Session Details</span>
                      </label>
                      <div className="confirmation-date-time">
                        <span>{localStorage.getItem('edlvl')}</span>
                      </div>
                    </div>
                    <div className="build-form-input">
                      <span className="confirm-sub">Tutor Session Details</span>
                      <textarea className="description" rows="8" cols="80"  value={this.state.description} onChange={this.handleChange('description')}></textarea>
                    </div>
                  </div>

                  <div className="form-submit-button-container">
                    <input className="submit-form-btn" type="submit" name="button" value="Confirm & Book"></input>
                  </div>
                  <div className="confirm-button-sub-container">
                    <span className="payment-sub">You are charged only after your tutor session is completed.</span>
                  </div>

                </form>

              </div>
            </div>
          </div>
          <div className="confirm-smallprint">
            <span>
              Tutors have a one-hour minimum. A 7.5% Trust and Support fee is added to the Tutor's total rate.</span>
            <span>
              If you cancel your session within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tutor's hourly rate. If you cancel the session (all appointments) or skip any individual appointment within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tutor's hourly rate.
            </span>
          </div>
      </div>
    );
  }
}
export default TutorConfirm;
