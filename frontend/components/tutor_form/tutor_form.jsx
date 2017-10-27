import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import Form from './form';
import TutorShow from './tutor_show';
import { PropsRoute } from 'react-router-with-props';


class TutorForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formType: 'form'
    };
    this.updateFormtype = this.updateFormtype.bind(this);
  }

  updateFormtype(formType) {
    this.setState({formType: formType});
  }

  render() {
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
              <div className={`build-progress-step ${ this.state.formType === 'form' ? '' : 'not-active'}`}>
                <i></i>
                <span>1. Fill Out Tutor Details</span>
              </div>
              <div className={`build-progress-step ${ this.state.formType === 'show' ? '' : 'not-active'}`}>
                <i></i>
                <span>2. View Tutors and Price</span>
              </div>
              <div className={`build-progress-step ${ this.state.formType === 'confirm' ? '' : 'not-active'}`}>
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
          <Switch>
            <PropsRoute path="/tutors/form" component={Form} props={this.props} updateForm={this.updateFormtype}/>
            <PropsRoute path="/tutors/recs" component={TutorShow}/>
          </Switch>

        </div>
      </div>
    );
  }
}

export default withRouter(TutorForm);
