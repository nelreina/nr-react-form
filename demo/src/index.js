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
class Demo extends Component {
  state = { values: {} };
  action = values => {
    this.setState(() => ({ values }));
  };
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>nr-react-form Demo</h1>
          <h3>Use createReduxForm</h3>
          {createReduxForm('demo', fields, this.action)}
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
