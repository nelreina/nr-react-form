import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const DemoForm = props => {
  const { handleSubmit, action } = props;
  return (
    <form onSubmit={handleSubmit(action)}>
      <Field name="email" component="input" placeholder="email" />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </form>
  );
};

const RForm = reduxForm({ form: 'demo' })(DemoForm);

import rootReducer from './rootReducer';

const store = createStoreDOM(rootReducer, {});

import Example from '../../src';

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
          <RForm action={this.sform} />
          <Example />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
