import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { BootstrapField } from '../../src';

const optStars = ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'];
const DemoForm = props => {
  const { handleSubmit, action } = props;
  return (
    <form onSubmit={handleSubmit(action)}>
      <Field name="email" component={BootstrapField} />
      <Field
        name="star"
        type="select"
        component={BootstrapField}
        options={optStars}
      />
    </form>
  );
};

const RForm = reduxForm({ form: 'demo' })(DemoForm);

import rootReducer from './rootReducer';

const store = createStoreDOM(rootReducer, {});

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
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
