import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import createReduxForm from '../../src/createReduxForm';
import rootReducer from './rootReducer';

const store = createStoreDOM(rootReducer, {});
const fields = [
  {
    type: 'text',
    name: 'username'
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email address'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password'
  }
];
class Demo extends Component {
  state = { values: {} };
  sform = values => {
    this.setState(() => ({ values }));
  };
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>nr-react-form Demo</h1>
          {createReduxForm('demo', fields, this.sform)}
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
