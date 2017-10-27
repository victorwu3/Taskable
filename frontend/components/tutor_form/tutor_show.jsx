import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TutorListItem from './tutor_list_item';

class TutorShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tutors: JSON.parse(localStorage.getItem('tutors')),
      sort: 'recommended'
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tutors) {
      localStorage.setItem('tutors', JSON.stringify(newProps.tutors));
      localStorage.setItem('currentSubject', JSON.stringify(newProps.currentSubject));
      this.setState({ tutors: newProps.tutors});
    }
  }

  handleChange(sort) {
    this.setState({ sort: sort });
  }

  render(){
    let results = this.state.tutors.map(tutor => {
      return (
        <TutorListItem tutor={tutor} />
      );
    });
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
              <div className="build-progress-step">
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
                <p className="form-title-words">Pick a Tutor</p>
              </div>
              <div className="form-subtitle">
                <p>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</p>
              </div>
            </div>

            <div className ="recommendations-container">
              <div className="recommendations-filter-container">
                <div className="recommendations-filter-panel">

                </div>
              </div>

              <div className="recommendations-results-container">
                <div className="recommendations-results-list">
                  {results}
                </div>
              </div>
            </div>


          </div>

      </div>
    );
  }

}



export default TutorShow;
