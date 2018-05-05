import React from 'react';
import { Route, Switch } from 'react-router-dom';

import code from './sample-code';
import Highlight from 'react-highlight';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import SignUpForm from './SignUpForm';
import FieldArrayForm from './FieldArrayForm';
import AllInputTypeForm from './AllInputTypeForm';
import FormState from './FormState';
import { LoginFormEmail } from '../../src';

const Form = ({ comp: Component, action, name }) => (
  <div className="form">
    <Component action={action} />
    <hr className="divider" />
    <FormState name={name} />
    <hr className="divider" />
    <Highlight className="code">{code[name]}</Highlight>
  </div>
);

const DisplayForm = ({ action }) => (
  <Switch>
    <Route
      path="/simple"
      render={props => (
        <Form comp={SimpleForm} action={action} name="SimpleForm" />
      )}
    />
    <Route
      path="/advanced-form"
      render={props => (
        <Form comp={AdvancedForm} action={action} name="AdvancedForm" />
      )}
    />
    <Route
      path="/login-form-email"
      render={props => (
        <Form comp={LoginFormEmail} action={action} name="loginFormEmail" />
      )}
    />
    <Route
      path="/sign-up-form"
      render={props => (
        <Form comp={SignUpForm} action={action} name="SignUpForm" />
      )}
    />
    <Route
      path="/all-input-type"
      render={props => (
        <Form
          comp={AllInputTypeForm}
          action={action}
          name="SupportedInputType"
        />
      )}
    />
    <Route
      path="/field-array-form"
      render={props => (
        <Form comp={FieldArrayForm} action={action} name="FieldArrayForm" />
      )}
    />
    <Route render={() => <h4>Select one of the Forms above</h4>} />
  </Switch>
);

export default DisplayForm;
