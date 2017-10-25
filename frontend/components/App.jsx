import React from 'react';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute } from '../util/auth_route';
import GreetingContainer from './greeting/greeting_container';
import Homepage from './homepage/homepage';


const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={Homepage} />
    </Switch>
  </div>
);

export default App;
