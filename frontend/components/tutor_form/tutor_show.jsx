import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TutorShow extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="form-container">
        <div className="form-title-container">
          <div className="form-title">
            <p className="form-title-words">Pick a Tutor</p>
          </div>
          <div className="form-subtitle">
            <p>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</p>
          </div>
        </div>


      </div>
    );
  }

}



export default TutorShow;
