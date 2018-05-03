import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { simple, login, signup, advanced, fieldArray } from './sample-code';
import Highlight from 'react-highlight';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import SignUpForm from './SignUpForm';
import FieldArrayForm from './FieldArrayForm';
import { LoginFormEmail } from '../../src';

const Form = ({ comp: Component, code, action }) => (
  <div>
    <Component action={action} />
    <hr className="" />
    <Highlight className="code">{code}</Highlight>
  </div>
);

const DisplayForm = ({ action }) => (
  <Switch>
    <Route
      path="/simple"
      render={props => <Form comp={SimpleForm} action={action} code={simple} />}
    />
    <Route
      path="/advanced-form"
      render={props => (
        <Form comp={AdvancedForm} action={action} code={advanced} />
      )}
    />
    <Route
      path="/login-form-email"
      render={props => (
        <Form comp={LoginFormEmail} action={action} code={login} />
      )}
    />
    <Route
      path="/sign-up-form"
      render={props => <Form comp={SignUpForm} action={action} code={signup} />}
    />
    <Route
      path="/field-array-form"
      render={props => (
        <Form comp={FieldArrayForm} action={action} code={fieldArray} />
      )}
    />
    <Route render={() => <h4>Select one of the Forms above</h4>} />
  </Switch>
);

export default DisplayForm;
