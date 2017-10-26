import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentSubject: this.props.props.currentSubject,
      address: null,
      ed_lvl: null,
      description: null
    };
  }

  handleSubmit(e) {
    let addressError;
    let subjectError;
    let levelError;
    let descriptionError;
    debugger
    e.preventDefault();
    const params = Object.assign({}, this.state);
    if (Object.values(params).every(x => x)) {
      this.props.props.fetchTutors(params);
      this.props.history.push('/tutors/recs');
    } else {
      if (!this.state.address) {
        $(document.querySelector('#fname')).addClass('error-input');
        addressError = (
        <div className="error-msg">First name can't be blank</div>
      );} else {
        fnameError = (<div></div>);
      }
    }

  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
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
                    <label className="form-radio-btn"><input type="radio" id="k8" name="group1" value="first_tier"></input>
                       Elementary K-8</label>
                  </li>
                  <li>
                    <label><input type="radio" id="hs" name="group1" value="second_tier"></input>
                       High School Level</label>
                  </li>
                  <li>
                    <label><input type="radio" id="college" name="group1" value="third_tier"></input>
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
    );
  }

}



export default Form;
