import React from 'react';
import { Field } from 'redux-form';
import BootstrapField from './BootstrapField';

const FieldItem = ({ item: field, name }) => (
  <Field name={name} {...field} component={BootstrapField} />
);

export default FieldItem;
