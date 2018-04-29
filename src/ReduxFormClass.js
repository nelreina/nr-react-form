import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';
import { each, assign, isString } from 'lodash';
import {
  checkRequiredFields,
  checkMinLength,
  checkMaxLength,
  checkType
} from './validations';

class ReduxFormClass {
  constructor(name, fields, initialValues, customValidator) {
    this._formName = name;
    this._fields = fields;
    this._initialValues = initialValues;
    this._customValidator = customValidator;
  }
  button = (text, classNames) => {
    this._buttonClass = classNames;
    this._buttonText = text;
    return this;
  };
  validate = values => {
    let errors = {};
    each(this._fields, (config, key) => {
      const name = isString(key) ? key : config.name;
      const req = checkRequiredFields(values[name], config, name);
      const max = checkMaxLength(values[name], config, name);
      const min = checkMinLength(values[name], config, name);
      const type = checkType(values[name], config, name);
      let cus;
      if (this._customValidator) {
        const cus = this._customValidator(values[name], config, name);
      }
      console.info('validate', cus);
      errors = assign({}, errors, max, min, type, req, cus);
    });
    return errors;
  };
  getComponent = () => {
    let Form = props => {
      const { handleSubmit, action } = props;

      return (
        <form onSubmit={handleSubmit(action)}>
          <List
            of={FieldItem}
            iterator={this._fields}
            keyname="name"
            formname={this._formName}
          />
          <button className={this._buttonClass} type="submit">
            {this._buttonText || 'Submit'}
          </button>
        </form>
      );
    };

    Form = reduxForm({
      form: this._formName,
      initialValues: this._initialValues,
      validate: this.validate
    })(Form);

    return Form;
  };
}

export default ReduxFormClass;
