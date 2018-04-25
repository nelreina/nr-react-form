import React from 'react';
import ReduxForm from './ReduxFormClass';

const emailFields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email Address'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
];

const usernameFields = [
  {
    name: 'username',
    type: 'text',
    label: 'Username'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
];
class LoginForm extends ReduxForm {
  constructor(name) {
    super(name);
    this._buttonText = 'Login';
  }
  withEmail() {
    return this.create(emailFields);
  }
  withUsername() {
    return this.create(usernameFields);
  }
}
export default LoginForm;
