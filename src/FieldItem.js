import React from 'react';
import { Field } from 'redux-form';
import BootstrapField from './BootstrapField';

const FieldItem = ({ item: field }) => {
  return <Field {...field} component={BootstrapField} />;
};

export default FieldItem;
