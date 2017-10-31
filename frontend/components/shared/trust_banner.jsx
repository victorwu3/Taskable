import React from 'react';
import { Link } from 'react-router-dom';

class TrustBanner extends React.Component {

  render() {
    let description;
    if (this.props.formType === 'form') {
      description = 'Satisfaction guaranteed for every tutoring session.';
    } else if (this.props.formType === 'show') {
      description = 'All Tutors are fully vetted & background checked.';
    } else if (this.props.formType === 'confirm') {
      description = "You don't pay until your session is completed.";
    }
    return (
      <div className="build-trust-banner">
        <div className="build-trust-container">
          <div className="trust-icon"></div>
          <strong className="trust-safety">Trust & Safety Guarantee:</strong>
          <div className="background-check">{description}</div>
        </div>
      </div>
    );
  }
}


export default TrustBanner;
