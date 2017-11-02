import React from 'react';


class HowItWorks extends React.Component {

  render(){
    return(
      <section className="how-it-works">
        <div className="main-content-container">
          <div className="how-it-works-container">
            <h2 className="how-it-works-title">How it Works</h2>
            <div className="how-it-works-steps-container">
              <div className="how-it-works-step">
                <img className="how-it-works-step-pic" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/howitworks1.svg"></img>
                <div className="how-it-works-step-content">
                  <div className="how-it-works-step-label">1</div>
                  <div className="how-it-works-step-name">Tell us where you're struggling</div>
                  <div className="how-it-works-step-description">
                    Choose from a variety of subjects and select the day and time you'd like to meet with a qualified Tutor. Give us the details and we'll find you the help.
                  </div>
                </div>
              </div>
              <div className="how-it-works-step">
                <div className="how-it-works-step-content">
                  <div className="how-it-works-step-label">2</div>
                  <div className="how-it-works-step-name">Get matched</div>
                  <div className="how-it-works-step-description">
                    Select from a list of qualified and fully vetted tutors. Find the right fit based on qualifications and hourly rates. Find an expert who suits your needs and learning style.
                  </div>
                </div>
                <img className="how-it-works-step-pic" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/howitworks2.svg"></img>
              </div>
              <div className="how-it-works-step">
                <img className="how-it-works-step-pic" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/howitworks3.svg"></img>
                <div className="how-it-works-step-content">
                  <div className="how-it-works-step-label">3</div>
                  <div className="how-it-works-step-name">Get real results!</div>
                  <div className="how-it-works-step-description">
                    Just like that, your tutor arrives and helps you towards your goal!. When your session is complete, payment will happen seamlessly and securely through the app.
                  </div>
                </div>
              </div>
            </div>
            <div className="how-it-works-separator">

            </div>
            <div className="taskable-pledge">
              <img className="how-it-works-pledge-pic" src="https://s3.us-east-2.amazonaws.com/app-taskable-pro/pledge.svg"></img>
              <div className="how-it-works-pledge-text-container">
                <div className="pledge-name">The Taskable Satisfaction Pledge</div>
                <div className="pledge-description">Trust and safety are our top priority. All Tutors must undergo extensive background and identity checks. Always have peace of mind with our money back guarantee.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HowItWorks;
