import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';

import ReduxFormDemo from './ReduxForm';
import rootReducer from './rootReducer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

const store = createStoreDOM(rootReducer, {});
class Demo extends Component {
  state = { values: {} };
  action = values => {
    this.setState(() => ({ values }));
  };
  render() {
    return (
      <Provider store={store}>
        <div className="container ">
          <h1>nr-react-form Demo</h1>
          <hr />
          <div className="app">
            <div className="forms">
              <h3>Redux Form Demo</h3>
              <ReduxFormDemo action={this.action} />
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
