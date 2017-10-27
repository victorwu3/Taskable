import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

class TutorListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let tutor = this.props.tutor;
    return (
      <div className="recommendation-result">
        <div className="recommendations-result-figure">
          <img className="result-picture" src={tutor.image_url} />
          <div className="book-container">
            <Link to="#" className="booking-link">
              <span>Select & Continue</span>
            </Link>
            <Link to="#" className="reviews-link"></Link>
          </div>
        </div>
        <div className="recommendations-result-content">
          <div className="recommendations-result-top-row">
            <div className="result-name">{tutor.fname.charAt(0).toUpperCase() + tutor.lname.slice(1)} {tutor.fname.slice(0,1).toUpperCase()}.</div>
            <div className="result-rate">${tutor.rate}/hr</div>
          </div>
          <ul className="result-info">
            <li>{tutor.num_completed} Completed {SUBJECTS[JSON.parse(localStorage.getItem('currentSubject'))]} tutor sessions</li>
          </ul>
          <div className="blurb-title">
            <span>How I can help:</span>
          </div>
          <div className="blurb">{tutor.description}</div>

        </div>
      </div>
    );
  }

}



export default TutorListItem;
