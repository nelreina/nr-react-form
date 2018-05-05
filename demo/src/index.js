import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Highlight from 'react-highlight';

import DisplayForm from './DisplayForm';
import FormState from './FormState';

import rootReducer from './rootReducer';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/highlight.js/styles/dracula.css';
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
          <div className="container-fluid">
            <h1>nr-react-form Demo</h1>
            <hr />
            <div className="app">
              <div className="nav nav-pills">
                <NavLink to="/simple" className="nav-link">
                  Simple
                </NavLink>
                <NavLink to="/login-form-email" className="nav-link">
                  Login Email
                </NavLink>
                <NavLink to="/sign-up-form" className="nav-link">
                  Sign Up
                </NavLink>
                <NavLink to="/advanced-form" className="nav-link">
                  Advanced
                </NavLink>
                <NavLink to="/field-array-form" className="nav-link">
                  Field Array
                </NavLink>
                <NavLink to="/all-input-type" className="nav-link">
                  Supported Input Types
                </NavLink>
              </div>
              <hr />
              <DisplayForm action={this.action} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
