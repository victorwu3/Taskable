import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AccountHeader from '../shared/header'

class TaskerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubject: 0,
      ed_lvl: null,
      description: null,
      rate: 50
    }
  }

  handleSubmit(e){

  }

  handleChange(field) {
    return (e) => {
      this.setState({ params: Object.assign(this.state, {[field]: e.target.value}) });
    };
  }

  render() {
    return (
      <div className="main">
        <AccountHeader logout={this.props.logout}/>

        <div className="form-title-container">
          <div className="form-title">
            <p className="form-title-words">Register to become a Tutor</p>
          </div>
          <div className="form-subtitle">
            <p>We need the following information to successfully register you as a tutor:</p>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-input-container">

            <div className="build-form-input">
              <h4>What Subject can you Tutor in?</h4>
              <div className="subject-select-container">
                <select className="subject-select" name="subject" id="mySelect" value={this.state.currentSubject} onChange={this.handleChange('currentSubject')}>
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
              <h4>What is your rate per hour?</h4>
              <div className="rate-input-container">
                <span className="rate-symbol">$</span>
                <input type="number" className="rate-input" value={this.state.rate} onChange={this.handleChange('rate')}></input>
                <span className="rate-symbol">/hr</span>
                <span className="asterisk">*</span>
              </div>
            </div>
            <div className="build-form-input">
              <h4 className="education-subtitle">What level of education can you provide service for?</h4>

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
              <h4>Enter a short description about yourself here to market yourself!</h4>
              <span>Please write any specific requests here, plus any requirements or questions that you may have. You can edit this later.</span>
              <textarea className="description" rows="8" cols="80" onChange={this.handleChange('description')} placeholder="EXAMPLE: Hi! I am a very passionate teacher with experience teaching Calculus at both the high school and college level. All of my students come out with stellar test scores and it makes me feel great!"></textarea>
            </div>
            <div className="form-submit-button-container">
              <input className="submit-form-btn" type="submit" name="button" value="See Tutors & Prices"></input>
            </div>
          </div>
        </form>

        <div className="form-title-container">
          <span className="fee">* - Taskable takes 20% of tutoring fees.</span>
        </div>
      </div>
    )
  }
}

export default TaskerForm;
