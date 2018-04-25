import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';

class ReduxForm {
  constructor(name, fields, action, buttonText = 'Submit') {
    this._name = name;
    this._fields = fields;
    this._action = action;
    this._buttonText = buttonText;
  }
  create() {
    let Form = props => {
      const { handleSubmit, action } = props;
      return (
        <form onSubmit={handleSubmit(action)}>
          <List of={FieldItem} iterator={this._fields} />
          <button type="submit">{this._buttonText}</button>
        </form>
      );
    };

    Form = reduxForm({ form: this._name })(Form);

    return <Form action={this._action} />;
  }
}

export default ReduxForm;