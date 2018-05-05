import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';
import { each, assign, isString } from 'lodash';
import { css } from 'emotion';
import {
  checkRequiredFields,
  checkMinLength,
  checkMaxLength,
  checkType,
  checkIsEqual
} from './validations';
const divInput = css`
  margin-bottom: 1em;
`;
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
      config['name'] = name;
      const req = checkRequiredFields(values[name], config, name);
      const max = checkMaxLength(values[name], config, name);
      const min = checkMinLength(values[name], config, name);
      const type = checkType(values[name], config, name);
      const eql = checkIsEqual(values, values[name], config, name);
      let cus;
      if (this._customValidator) {
        cus = this._customValidator(values[name], config, name);
      }
      errors = assign({}, errors, cus, max, min, type, eql, req);
    });
    return errors;
  };
  getComponent = () => {
    let Form = props => {
      const { handleSubmit, action } = props;

      return (
        <form onSubmit={handleSubmit(action)}>
          <div className={divInput}>
            <List
              of={FieldItem}
              iterator={this._fields}
              keyname="name"
              formname={this._formName}
            />
          </div>
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
