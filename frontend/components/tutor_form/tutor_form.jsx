import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TutorForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {

    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

  }
  //...


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

          <div className="form-container">
            <div className="form-title-container">
              <div className="form-title">
                <p>Describe your Tutor</p>
              </div>
              <div className="form-subtitle">
                <p>We need these inputs to show only qualified and available Tutors for the job.</p>
              </div>
            </div>

            <div className="form-input-container">
              <div className="build-form-input">
                <h4>Address</h4>
                <div className="address-row-container">
                  <div className="search-bar-container">
                    <input type="text" name="" value=""></input>
                  </div>
                  <div className="address-unit-container">
                    <input type="text" name="" value=""></input>
                  </div>
                </div>
              </div>

              <div className="build-form-input">
                <h4>Education Requirement</h4>
                <ul>
                  <li>
                    <input type="radio" id="k8" name="" value="Elementary K-8"></input>
                    <label >Elementary K-8</label>
                  </li>
                  <li>
                    <input type="radio" id="hs" name="" value="High School Level"></input>
                    <label >High School Level</label>
                  </li>
                  <li>
                    <input type="radio" id="college" name="" value="College/Graduate"></input>
                    <label >College/Graduate Level</label>
                  </li>
                </ul>
              </div>

              <div className="build-form-input">
                <h4>Tutor Request Details</h4>
                <p>Please write any specific requests here, plus any requirements or questions that you may have. You can edit this later.</p>
                <textarea name="description" rows="8" cols="80" placeholder="EXAMPLE: I have a big chemistry test coming up in 2 weeks and I am having trouble understanding balancing chemical reactions. This is a high school AP Chemistry course."></textarea>
              </div>

              <div className="form-submit-button-container">
                <button className="submit-form-btn=" type="button" name="button">See Tutors & Prices</button>
              </div>
            </div>
          </div>
        </div>


      </div>



    );
  }
}

export default TutorForm;
