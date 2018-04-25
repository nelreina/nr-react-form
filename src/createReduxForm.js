import React from 'react';
import { reduxForm } from 'redux-form';
import List from 'nr-react-list';
import FieldItem from './FieldItem';

export default (name, fields, onSubmit, buttonText = 'Submit') => {
  const DemoForm = props => {
    const { handleSubmit, action } = props;
    return (
      <form onSubmit={handleSubmit(action)}>
        <List of={FieldItem} iterator={fields} />
        <button type="submit">{buttonText}</button>
      </form>
    );
  };

  const RForm = reduxForm({ form: name })(DemoForm);

  return <RForm action={onSubmit} />;
};
