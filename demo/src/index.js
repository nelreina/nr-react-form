import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import { LoginFormEmail } from '../../src';

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
        <BrowserRouter>
          <div className="container ">
            <h1>nr-react-form Demo</h1>
            <hr />
            <div className="app">
              <div className="forms">
                <h3>Redux Form Demo</h3>
                <div className="nav nav-pills">
                  <NavLink to="/simple" className="nav-link">
                    Simple Form
                  </NavLink>
                  <NavLink to="/advanced-form" className="nav-link">
                    Advanced Form
                  </NavLink>
                  <NavLink to="/login-form-email" className="nav-link">
                    Login Form Email
                  </NavLink>
                </div>
                <hr />
                <Switch>
                  <Route
                    path="/simple"
                    render={props => <SimpleForm action={this.action} />}
                  />
                  <Route
                    path="/advanced-form"
                    render={props => <AdvancedForm action={this.action} />}
                  />
                  <Route
                    path="/login-form-email"
                    render={props => <LoginFormEmail action={this.action} />}
                  />
                  <Route
                    render={() => <h4>Select one of the Forms above</h4>}
                  />
                </Switch>
              </div>
              <div className="result">
                <h4>Result onSubmit </h4>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
