import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';

class ReduxFormClass {
  constructor(name, fields, initialValues, validate) {
    this._name = name;
    this._fields = fields;
    // this._validate = validate;
    this._initialValues = initialValues;
  }
  button(text, classNames) {
    this._buttonClass = classNames;
    this._buttonText = text;
    return this;
  }
  getComponent() {
    let Form = props => {
      const { handleSubmit, action } = props;

      return (
        <form onSubmit={handleSubmit(action)}>
          <List of={FieldItem} iterator={this._fields} keyname="name" />
          <button className={this._buttonClass} type="submit">
            {this._buttonText || 'Submit'}
          </button>
        </form>
      );
    };

    Form = reduxForm({
      form: this._name,
      initialValues: this._initialValues
      // validate: this._validate
    })(Form);

    return Form;
  }
}

export default ReduxFormClass;
