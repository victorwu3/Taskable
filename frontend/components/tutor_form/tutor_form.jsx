import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TutorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentSubject: this.props.currentSubject,
      address: null,
      ed_lvl: null,
      description: null
    };
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    const params = Object.assign({}, this.state);
    this.props.fetchTutors(params);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return(
      <div className="main">

        <div className="header-container">
          <header className="page-header">
            <div className="header-elements-container">

              <a className="header-logo" href="#" ></a>

            </div>
          </header>
        </div>

        <div id="root">
          <div className="build-progress">
            <div className="build-progress-container">
              <div className="build-progress-step">
                <i></i>
                <span>1. Fill Out Tutor Details</span>
              </div>
              <div className="build-progress-step not-active">
                <i></i>
                <span>2. View Tutors and Price</span>
              </div>
              <div className="build-progress-step not-active">
                <i></i>
                <span>3. Confirm & Book</span>
              </div>
            </div>
          </div>

          <div className="build-trust-banner">
            <div className="build-trust-container">
              <div className="trust-icon"></div>
            </div>
          </div>

          <div className="form-container">
            <div className="form-title-container">
              <div className="form-title">
                <p className="form-title-words">Describe your Tutor</p>
              </div>
              <div className="form-subtitle">
                <p>We need these inputs to show only qualified and available Tutors for the job.</p>
              </div>
            </div>

            <form onSubmit={this.handleSubmit}>
              <div className="form-input-container">
                <div className="build-form-input">
                  <h4>ADDRESS</h4>
                  <div className="address-row-container">
                    <div className="search-bar-container">
                      <input className="address-input" type="text" placeholder="Enter street address" onChange={this.handleChange('address')}></input>
                    </div>
                  </div>
                </div>

                <div className="build-form-input">
                  <h4>SUBJECT</h4>
                  <div className="subject-select-container">
                    <select name="subject" id="mySelect" value={this.state.currentSubject} onChange={this.handleChange('currentSubject')}>
                      <option value="0" disabled="true">Please select a Subject</option>
                      <option value="1" defaultValue>Math</option>
                      <option value="2">Chemistry</option>
                      <option value="3">Biology</option>
                      <option value="4">English</option>
                      <option value="5">History</option>
                      <option value="6">Test Prep</option>
                      <option value="7">Coding</option>
                      <option value="8">Accounting</option>
                      <option value="9">Physics</option>
                    </select>
                  </div>
                </div>

                <div className="build-form-input">
                  <h4 className="education-subtitle">EDUCATION REQUIREMENT</h4>
                  <ul>
                    <fieldset className="radio-buttons" id="group1" onChange={this.handleChange('ed_lvl')}>
                      <li>
                        <label className="form-radio-btn"><input type="radio" id="k8" name="group1" value="1"></input>
                           Elementary K-8</label>
                      </li>
                      <li>
                        <label><input type="radio" id="hs" name="group1" value="2"></input>
                           High School Level</label>
                      </li>
                      <li>
                        <label><input type="radio" id="college" name="group1" value="3"></input>
                           College/Graduate Level</label>
                      </li>
                    </fieldset>
                  </ul>
                </div>

                <div className="build-form-input">
                  <h4>TUTOR REQUEST DETAILS</h4>
                  <span>Please write any specific requests here, plus any requirements or questions that you may have. You can edit this later.</span>
                  <textarea className="description" rows="8" cols="80" onChange={this.handleChange('description')} placeholder="EXAMPLE: I have a big chemistry test coming up in 2 weeks and I am having trouble understanding balancing chemical reactions. This is a high school AP Chemistry course."></textarea>
                </div>

                <div className="form-submit-button-container">
                  <input className="submit-form-btn" type="submit" name="button" value="See Tutors & Prices"></input>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default TutorForm;
