import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import {
  createReduxForm,
  ReduxFormClass,
  LoginFormEmail,
  LoginFormUserName
} from '../../src';
import rootReducer from './rootReducer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

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
  lastName: 'Reina',
  email: 'nelreina@gmail.com'
};
class Demo extends Component {
  state = { values: {} };
  action = values => {
    this.setState(() => ({ values }));
  };
  render() {
    const DemoForm1 = createReduxForm('demo1', fields);
    let DemoForm2 = new ReduxFormClass('demo2', fields, initValues);
    DemoForm2.button('Demo2', 'btn btn-success');
    DemoForm2 = DemoForm2.getComponent();

    return (
      <Provider store={store}>
        <div className="container ">
          <h1>nr-react-form Demo</h1>
          <div className="app">
            <div className="forms">
              <h3>Use createReduxForm</h3>
              <DemoForm1 action={this.action} />
              <hr />

              <h3>Use ReduxFormClass with Initial State</h3>
              <DemoForm2 action={this.action} />
              <hr />

              <h3>Use LoginForm with Email</h3>
              <LoginFormEmail action={this.action} />
              <hr />

              <h3>Use LoginForm with UserName</h3>
              <LoginFormUserName action={this.action} />
            </div>
            <div className="result">
              <h4>Result onSubmit </h4>
              <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
