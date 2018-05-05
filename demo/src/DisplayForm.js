import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { simple, login, signup, advanced, fieldArray } from './sample-code';
import Highlight from 'react-highlight';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import SignUpForm from './SignUpForm';
import FieldArrayForm from './FieldArrayForm';
import AllInputTypeForm from './AllInputTypeForm';
import FormState from './FormState';
import { LoginFormEmail } from '../../src';

const Form = ({ comp: Component, code, action, name }) => (
  <div className="form">
    <Component action={action} />
    <hr className="divider" />
    <Highlight className="code">{code}</Highlight>
    <hr className="divider" />
    <FormState name={name} />
  </div>
);

const DisplayForm = ({ action }) => (
  <Switch>
    <Route
      path="/simple"
      render={props => (
        <Form
          comp={SimpleForm}
          action={action}
          code={simple}
          name="SimpleForm"
        />
      )}
    />
    <Route
      path="/advanced-form"
      render={props => (
        <Form
          comp={AdvancedForm}
          action={action}
          code={advanced}
          name="AdvancedForm"
        />
      )}
    />
    <Route
      path="/login-form-email"
      render={props => (
        <Form
          comp={LoginFormEmail}
          action={action}
          code={login}
          name="LoginFormEmail"
        />
      )}
    />
    <Route
      path="/sign-up-form"
      render={props => (
        <Form
          comp={SignUpForm}
          action={action}
          code={signup}
          name="SignUpForm"
        />
      )}
    />
    <Route
      path="/all-input-type"
      render={props => (
        <Form
          comp={AllInputTypeForm}
          action={action}
          code={'all'}
          name="SupportedInputType"
        />
      )}
    />
    <Route
      path="/field-array-form"
      render={props => (
        <Form
          comp={FieldArrayForm}
          action={action}
          code={fieldArray}
          name="FieldArrayForm"
        />
      )}
    />
    <Route render={() => <h4>Select one of the Forms above</h4>} />
  </Switch>
);

export default DisplayForm;
