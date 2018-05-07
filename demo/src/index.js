import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Highlight from 'react-highlight';
import store from './store';

import FormState from './FormState';
import DisplayForm from './DisplayForm';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/highlight.js/styles/dracula.css';
import './app.css';

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
            <p className="text-center">
              All input types of nr-react-form library is styled with{' '}
              <a target="_blank" href="http://getbootstrap.com">
                Bootstrap V4
              </a>
            </p>
            <hr />
            <div className="app">
              <div className="nav nav-pills nav-fill">
                <NavLink to="/simple" className="nav-item nav-link">
                  Simple
                </NavLink>
                <NavLink to="/login-form-email" className="nav-item nav-link">
                  Login Email
                </NavLink>
                <NavLink to="/sign-up-form" className="nav-item nav-link">
                  Sign Up
                </NavLink>
                <NavLink to="/advanced-form" className="nav-item nav-link">
                  Advanced
                </NavLink>
                <NavLink to="/field-array-form" className="nav-item nav-link">
                  Field Array
                </NavLink>
                <NavLink to="/all-input-type" className="nav-item nav-link">
                  Supported Input Types
                </NavLink>
                <NavLink to="/select-form" className="nav-item nav-link">
                  Select Options
                </NavLink>
              </div>
              {/* <hr /> */}
              <DisplayForm action={this.action} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
