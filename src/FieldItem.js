import React from 'react';
import { Field } from 'redux-form';
import RenderField from './RenderField';

const FieldItem = ({ item: field, name }) => {
  let item;
  switch (field.type) {
    case 'field-array':
      item = 'Render Field Array';
      break;

    default:
      item = <Field name={name} {...field} component={RenderField} />;
      break;
  }
  return item;
};

export default FieldItem;
