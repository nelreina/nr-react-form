import React from 'react';
import { Field } from 'redux-form';
import RenderField from './RenderField';

const FieldItem = ({ item: field, name }) => (
  <Field name={name} {...field} component={RenderField} />
);

export default FieldItem;
