import React from 'react';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/auth_route';
import GreetingContainer from './greeting/greeting_container';
import HomepageContainer from './homepage/homepage_container';
import TutorFormContainer from './tutor_form/tutor_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import TutorShowContainer from './tutor_form/tutor_show_container';
import TutorConfirmContainer from './tutor_form/tutor_confirm_container';
import AccountContainer from './account/account_container';

const App = () => (
  <div>
    <header>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/account" component={AccountContainer} />
      <Route path="/tutors/form" component={TutorFormContainer} />
      <Route path="/tutors/recs" component={TutorShowContainer} />
      <ProtectedRoute path="/tutors/confirm" component={TutorConfirmContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute path="/" component={HomepageContainer} />

    </Switch>
  </div>
);

export default App;
