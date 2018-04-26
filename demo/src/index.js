import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import {
  createReduxForm,
  ReduxFormClass,
  ReduxLoginFormClass,
  LoginFormEmail
} from '../../src';
import rootReducer from './rootReducer';

const store = createStoreDOM(rootReducer, {});
const fields = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name'
  },
  {
    type: 'text',
    name: 'lastName',
    label: 'Last Name'
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email address'
  }
];
const initValues = {
  firstName: 'Nelson',
  lastName: 'Reina'
};
class Demo extends Component {
  state = { values: {} };
  action = values => {
    this.setState(() => ({ values }));
  };
  render() {
    const DemoFormWithMethod = createReduxForm('demo', fields, this.action);
    const DemoForm = new ReduxFormClass('demo2').create(fields, initValues);
    const LFEWithClass = new ReduxLoginFormClass('loginForm').withEmail();
    const LoginForm = new ReduxLoginFormClass('loginForm').withUsername();
    return (
      <Provider store={store}>
        <div>
          <h1>nr-react-form Demo</h1>
          <h2>Use createReduxForm</h2>
          <DemoFormWithMethod />
          <h2>Use ReduxFormClass with Initial State</h2>
          <DemoForm action={this.action} />
          <h2>Use LoginForm with Email</h2>
          <h4>created with Class</h4>
          <LFEWithClass action={this.action} />
          <h4>Use LoginFormEmail Component</h4>
          <LoginFormEmail action={this.action} />
          <h2>Use LoginForm with Username</h2>
          <LoginForm action={this.action} />
          <h4>Result onSubmit </h4>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
