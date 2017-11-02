import React from 'react';

class HowToGetStarted extends React.Component {

  render(){
    return(
      <div className="how-to-get-started-container">
        <h2 className="get-started-title">How to Get Started</h2>
        <p className="get-started-sub">We're excited to help! Here's how it works:</p>
        <div className="get-started-step">
          <div className="get-started-figure">
            <div className="get-started-icon">1</div>
          </div>
          <div className="get-started-content">
            <h2 className="get-started-name">
              <span>Pick a Subject</span>
            </h2>
            <p className="get-started-sub">
              <span>Choose from a list of popular subjects and areas of education</span>
            </p>
          </div>
        </div>
        <div className="get-started-step">
          <div className="get-started-figure">
            <div className="get-started-icon">2</div>
          </div>
          <div className="get-started-content">
            <h2 className="get-started-name">
              <span>Get Matched</span>
            </h2>
            <p className="get-started-sub">
              <span>We'll connect you with a skilled Tutor within minutes of your request</span>
            </p>
          </div>
        </div>
        <div className="get-started-step">
          <div className="get-started-figure">
            <div className="get-started-icon">3</div>
          </div>
          <div className="get-started-content">
            <h2 className="get-started-name">
              <span>Get Help Now!</span>
            </h2>
            <p className="get-started-sub">
              <span>Choose when and where to meet with your selected tutor</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HowToGetStarted;
