import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';

class ReduxFormClass {
  constructor(name, action, buttonText = 'Submit') {
    this._name = name;
    this._action = action;
    this._buttonText = buttonText;
  }
  create(fields) {
    let Form = props => {
      const { handleSubmit, action } = props;
      const onSubmit = action || this._action;
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <List of={FieldItem} iterator={fields} />
          <button type="submit">{this._buttonText}</button>
        </form>
      );
    };

    Form = reduxForm({ form: this._name })(Form);

    return Form;
  }
}

export default ReduxFormClass;
