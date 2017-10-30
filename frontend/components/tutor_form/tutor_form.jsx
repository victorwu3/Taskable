import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import TutorShow from './tutor_show';
import { PropsRoute } from 'react-router-with-props';


class TutorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      params: {
        currentSubject: props.currentSubject || JSON.parse(localStorage.getItem('currentSubject')),
        address: null,
        ed_lvl: null,
        description: null,
      },
      errors: [],
    };
  }

  handleSubmit(e) {
    let addressError;
    let subjectError;
    let levelError;
    let descriptionError;
    e.preventDefault();
    const params = Object.assign({}, this.state.params);
    let errors = (Object.keys(params).filter(x => !params[x]));
    if (errors.length === 0) {
      localStorage.setItem('address', this.state.params.address);
      localStorage.setItem('description', this.state.params.description);
      this.props.fetchTutors(params).then(() => this.props.history.push('/tutors/recs'));
    } else {
      this.setState({errors: errors});
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ params: Object.assign(this.state.params, {[field]: e.target.value}) });
      if (field === 'currentSubject') {
        localStorage.setItem('currentSubject', e.target.value);
      } else if (field === 'ed_lvl') {
        localStorage.setItem('edlvl', e.target.parentElement.innerText);
      }
    };
  }

  render() {
    let addressError = (<div></div>);
    let subjectError = (<div></div>);
    let lvlError = (<div></div>);
    let descripError = (<div></div>);
    if (this.state.errors.length > 0) {
      if (this.state.errors.includes('currentSubject')) {
        subjectError = ( <div className="form-error-msg">Subject can't be blank</div>);
      }
      if (this.state.errors.includes('address')) {
        $(document.querySelector('.address-input')).addClass('error-input');
        addressError = ( <div className="form-error-msg">Address can't be blank</div>);
      }
      if (this.state.errors.includes('ed_lvl')) {
        lvlError = ( <div className="form-error-msg">Education level can't be blank</div>);
      }
      if (this.state.errors.includes('description')) {
        $(document.querySelector('.description')).addClass('error-input');
        descripError = ( <div className="form-error-msg">Description can't be blank</div>);
      }
    }

    return(
      <div className="main">

        <div className="header-container">
          <header className="page-header">
            <div className="header-elements-container">
              <Link className="header-logo" to="/" ></Link>
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
                    {addressError}
                  </div>
                </div>
              </div>
              <div className="build-form-input">
                <h4>SUBJECT</h4>
                <div className="subject-select-container">
                  <select className="subject-select" name="subject" id="mySelect" value={this.state.params.currentSubject} onChange={this.handleChange('currentSubject')}>
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
                  {subjectError}
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
                  {lvlError}
                </ul>
              </div>
              <div className="build-form-input">
                <h4>TUTOR REQUEST DETAILS</h4>
                <span>Please write any specific requests here, plus any requirements or questions that you may have. You can edit this later.</span>
                <textarea className="description" rows="8" cols="80" onChange={this.handleChange('description')} placeholder="EXAMPLE: I have a big chemistry test coming up in 2 weeks and I am having trouble understanding balancing chemical reactions. This is a high school AP Chemistry course."></textarea>
                {descripError}
              </div>
              <div className="form-submit-button-container">
                <input className="submit-form-btn" type="submit" name="button" value="See Tutors & Prices"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(TutorForm);
