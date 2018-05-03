import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { simple, login, signup, advanced } from './sample-code';
import Highlight from 'react-highlight';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import SignUpForm from './SignUpForm';
import { LoginFormEmail } from '../../src';

const DisplayForm = ({ action }) => (
  <Switch>
    <Route
      path="/simple"
      render={props => {
        return (
          <div>
            <SimpleForm action={action} />
            <hr className="" />
            <Highlight className="code">{simple}</Highlight>
          </div>
        );
      }}
    />
    <Route
      path="/advanced-form"
      render={props => {
        return (
          <div>
            <AdvancedForm action={action} />
            <hr className="" />
            <Highlight className="code">{advanced}</Highlight>
          </div>
        );
      }}
    />
    <Route
      path="/login-form-email"
      render={props => {
        return (
          <div>
            <LoginFormEmail action={action} />
            <hr className="" />
            <Highlight className="code">{login}</Highlight>
          </div>
        );
      }}
    />
    <Route
      path="/sign-up-form"
      render={props => {
        return (
          <div>
            <SignUpForm action={action} />
            <hr className="" />
            <Highlight className="code">{signup}</Highlight>
          </div>
        );
      }}
    />
    <Route render={() => <h4>Select one of the Forms above</h4>} />
  </Switch>
);

export default DisplayForm;
