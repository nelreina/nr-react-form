import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStoreDOM } from 'nelreina-web-utils';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Highlight from 'react-highlight';

import AdvancedForm from './AdvancedForm';
import SimpleForm from './SimpleForm';
import SignUpForm from './SignUpForm';
import SubmitResult from './SubmitResult';
import { simple, login, signup, advanced } from './sample-code';
import { LoginFormEmail } from '../../src';

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
          <div className="container ">
            <h1>nr-react-form Demo</h1>
            <hr />
            <div className="app">
              <div className="forms">
                <h3>Redux Form Demo</h3>
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
                </div>
                <hr />
                <Switch>
                  <Route
                    path="/simple"
                    render={props => {
                      return (
                        <div>
                          <SimpleForm action={this.action} />
                          <hr className="" />
                          <Highlight className="code">{simple}</Highlight>
                        </div>
                      );
                    }}
                  />
                  <Route
                    path="/advanced-form"
                    render={props => {
                      return (
                        <div>
                          <AdvancedForm action={this.action} />
                          <hr className="" />
                          <Highlight className="code">{advanced}</Highlight>
                        </div>
                      );
                    }}
                  />
                  <Route
                    path="/login-form-email"
                    render={props => {
                      return (
                        <div>
                          <LoginFormEmail action={this.action} />
                          <hr className="" />
                          <Highlight className="code">{login}</Highlight>
                        </div>
                      );
                    }}
                  />
                  <Route
                    path="/sign-up-form"
                    render={props => {
                      return (
                        <div>
                          <SignUpForm action={this.action} />
                          <hr className="" />
                          <Highlight className="code">{signup}</Highlight>
                        </div>
                      );
                    }}
                  />
                  <Route
                    render={() => <h4>Select one of the Forms above</h4>}
                  />
                </Switch>
              </div>
              <hr className="divider" />
              <div className="result">
                <h4>Form State </h4>
                <SubmitResult />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
