import React from 'react';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute } from '../util/auth_route';
import GreetingContainer from './greeting/greeting_container';
import Homepage from './homepage/homepage';
import TutorFormContainer from './tutor_form/tutor_form_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/tutors/form" component={TutorFormContainer} />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
